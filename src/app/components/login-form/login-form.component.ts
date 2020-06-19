import { Component, OnInit } from '@angular/core';
import {FormControl,
  FormGroupDirective, NgForm,
  Validators,FormBuilder,FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {LoginService} from 'src/app/service/login.service'
import {Router} from '@angular/router';
import { PexelService } from 'src/app/service/pexel.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

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
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  text = 'Login page';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  password='';
  username='';
  poster: any;
  getVid: any;
  videoLinks: string[] = [];

  // matcher = new MyErrorStateMatcher();
  constructor(private pexelService: PexelService,private loginService: LoginService,
    private router: Router) {}

  ngOnInit(): void {
    this.getRandomVideo();
    // this.login("user1", "password");
    // this.getVid = setInterval(() => {
    //   this.getRandomVideo();
    // }, 10000);
  
  }
  ngOnDestroy() {
    if (this.getVid) {
      clearInterval(this.getVid);
    }
  }

 login(username, password) {
    this.loginService.login(username, password)
    .then(response => this.parseLogIn(response))
  }
parseLogIn(response) {
  console.log(response);
  if (response.failed) {
    alert("Your username or password was incorrect. Please try again.");
    this.router.navigate(['']);
  } else {
      localStorage.setItem("login", "true");
      localStorage.setItem("token", response.idtoken);
      localStorage.setItem("userId", response.User.id);
      this.router.navigate(['homepage']);
  }
}

logOut(){
 this.loginService.logOut;
}

  getRandomVideo() {
    this.pexelService.getRandomCookingVideos().then((res) => {
      console.log(res);
      res.videos.forEach((element) => {
        element.video_files.forEach((element2) => {
          element2.width == '1920' && this.videoLinks.push(element2.link);
        });
      });
      console.log(this.videoLinks);
    });
  }

}

