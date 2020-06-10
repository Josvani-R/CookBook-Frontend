import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {LoginService} from 'src/app/service/login.service'
import {Router} from '@angular/router';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  text = 'Login page';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(
    private loginService: LoginService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.login("user1", "password");
  }

  login(email, password) {
    this.loginService.login(email, password)
    .then(response => this.parseLogIn(response))
  }

parseLogIn(response) {
  console.log(response);
  if (response === 'failed login') {
    alert("Your email or password was incorrect. Please try again.");
    this.router.navigate(['']);
  } else {
      localStorage.setItem("token", response.idtoken);
      localStorage.setItem("userId", response.User.id);
      this.router.navigate(['homepage']);

  }
}

logOut()
{
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
}

}
