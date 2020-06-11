import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
  constructor(private pexelService: PexelService) {}

  ngOnInit(): void {
    this.getRandomVideo();
    // this.getVid = setInterval(() => {
    //   this.getRandomVideo();
    // }, 10000);
  }
  ngOnDestroy() {
    if (this.getVid) {
      clearInterval(this.getVid);
    }
  }

  getRandomVideo() {
    this.pexelService.getRandomCookingVideos().then((res) => {
      let randomVideo = Math.round(Math.random() * res.videos.length);
      console.log(res.videos[randomVideo]);

      res.videos.forEach((element) => {
        element.video_files.forEach((element2) => {
          element2.width == '1920' && this.videoLinks.push(element2.link);
        });
      });
      console.log(this.videoLinks);
    });
  }
}
