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
import { PexelService } from 'src/app/service/pexel.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

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


  poster: any;
  getVid: any;
  videoLinks: string[] = [];

  // matcher = new MyErrorStateMatcher();
  constructor(private pexelService: PexelService,private loginService: LoginService,
    private router: Router) {}

  ngOnInit(): void {
    this.getRandomVideo();
    this.login("user1", "password");
    // this.getVid = setInterval(() => {
    //   this.getRandomVideo();
    // }, 10000);
  }
  ngOnDestroy() {
    if (this.getVid) {
      clearInterval(this.getVid);
    }
  }
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
logOut()
{
 this.loginService.logOut;
}

  getRandomVideo() {
    this.pexelService.getRandomCookingVideos().then((res) => {
      let randomVideo = Math.round(Math.random() * res.videos.length);
      console.log(res.videos[randomVideo]);
      res;
      res.videos.forEach((element) => {
        element.video_files.forEach((element2) => {
          element2.width == '1920' && this.videoLinks.push(element2.link);
        });
      });
      console.log(this.videoLinks);
    });
  }
}
