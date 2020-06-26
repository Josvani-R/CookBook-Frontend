import { Component, OnInit, Input } from '@angular/core';
import { Cookbook } from 'src/app/Model/Cookbook';
import { CookBookService } from 'src/app/service/cook-book.service';
import {MatDialog} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/Model/User';


@Component({
  selector: 'app-create-cookbook-modal',
  templateUrl: './create-cookbook-modal.component.html',
  styleUrls: ['./create-cookbook-modal.component.scss']
})
export class CreateCookbookModalComponent implements OnInit {
  user: User;
  cookbook: Cookbook ={id: 0, title: "", description: "" , pic: "", user:this.user};

  title: string;
  description: string;


  constructor(
    private cookbookService: CookBookService, private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  newCookBook(){

    console.log('hello');
    console.log(this.cookbook);
    this.cookbookService
    .createCookbook(this.cookbook)
    .then(res=>{
      console.log(res)
    }
    )

  }

  getUser(){
    this.userService.getUserById(localStorage.userId).then(res => {
      this.cookbook.user = res;
      console.log(this.cookbook)
    })
    .catch((error) => {
      console.log(error);
    });
  }


}
