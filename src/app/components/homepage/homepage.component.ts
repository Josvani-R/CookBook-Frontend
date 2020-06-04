import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UsersService } from 'src/app/service/users.service';
import { CookBookService } from 'src/app/service/cook-book.service';
import { Cookbook } from 'src/app/Model/Cookbook';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
cookbooks: Cookbook[];




  constructor(
    private userService: UsersService,
    private cookbookService: CookBookService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllCookBooks();
    this.getAllCookbooksById();

  }

  getAllCookBooks(): void {
    this.cookbookService.getAllCookbooks()
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    });
  }

  getAllUsers(): void{
    this.userService.getAllUsers()
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    });

  }

  getAllCookbooksById(): void{
    let id = 1;
    this.cookbookService.getAllCookbooksById(id)
      .then(res => {
        this.cookbooks = res;
        console.log(this.cookbooks);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
