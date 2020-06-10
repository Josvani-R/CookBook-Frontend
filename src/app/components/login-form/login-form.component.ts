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
  video1: any;
  video2: any;
  video3: any;
  poster: any;
  getVid: any;

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

      this.video1 = res.videos[5].video_files[0].link;
      this.video2 = res.videos[4].video_files[0].link;
      this.video3 = res.videos[9].video_files[0].link;
    });
  }
}
