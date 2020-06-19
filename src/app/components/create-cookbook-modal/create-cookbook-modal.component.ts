import { Component, OnInit, Input } from '@angular/core';
import { Cookbook } from 'src/app/Model/Cookbook';
import { CookBookService } from 'src/app/service/cook-book.service';
import {MatDialog} from '@angular/material/dialog';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-create-cookbook-modal',
  templateUrl: './create-cookbook-modal.component.html',
  styleUrls: ['./create-cookbook-modal.component.scss']
})
export class CreateCookbookModalComponent implements OnInit {
  createCookbook: Cookbook;

  title: string;
  description: string;


  constructor(
    private cookbookService: CookBookService
  ) { }

  ngOnInit(): void {
    this.createCookbook.user.id = localStorage.userId;
  }

  createCookBook(){

    console.log(this.title);
    console.log(this.description)
    // this.cookbookService
    // .createCookbook(this.createCookbook)
    // .then(res=>{
    //   console.log(res)
    // }
    // )

  }


}
