import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UsersService } from 'src/app/service/users.service';
import { CookBookService } from 'src/app/service/cook-book.service';
import { Cookbook } from 'src/app/Model/Cookbook';
import { PexelService } from 'src/app/service/pexel.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  cookbooks: Cookbook[];

  photo: string;

  constructor(
    private userService: UsersService,
    private cookbookService: CookBookService,
    private pexelService: PexelService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllCookBooks();
    this.getAllCookbooksById();
    this.getPhotoBackground();
  }

  getPhotoBackground(): void {
    616360;

    this.pexelService.getPhotoById(349609).then((res) => {
      console.log(res);
      this.photo = res.src.large2x;
    });
    // this.pexelService
    //   .getRandomPhotos('cooking')
    //   .then((res) => {
    //     this.photo =
    //       res.photos[Math.round(Math.random() * res.photos.length)].src.large2x;
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  getAllCookBooks(): void {
    this.cookbookService
      .getAllCookbooks()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAllUsers(): void {
    this.userService
      .getAllUsers()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAllCookbooksById(): void {
    let id = 1;
    this.cookbookService
      .getAllCookbooksById(id)
      .then((res) => {
        this.cookbooks = res;
        console.log(this.cookbooks);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
