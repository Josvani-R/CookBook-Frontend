import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UsersService } from 'src/app/service/users.service';
import { CookBookService } from 'src/app/service/cook-book.service';
import { Cookbook } from 'src/app/Model/Cookbook';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
@Input()
user: User;
cookbooks: Cookbook[] = [];


  constructor(private cookbookService: CookBookService) { }

  ngOnInit(): void {
    this.getCookbooksById();

  }

  getCookbooksById(): void{
    let id = this.user.id;
    this.cookbookService.getAllCookbooksById(id)
    .then(res => {
      this.cookbooks = res;
    })
    .catch(
      error => {
        (console.log(error));
      }
    );
  }


}
