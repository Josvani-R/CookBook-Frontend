import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/service/users.service';
import {RecipeService} from 'src/app/service/recipe.service';
import {CookBookService} from 'src/app/service/cook-book.service';
import {User} from 'src/app/Model/User';
import {Cookbook} from 'src/app/Model/Cookbook';
import {Recipe} from 'src/app/Model/Recipe'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  ///wrote this for users but filled in the logic for other searches
  //you just need to slightly change the html and ts to make it work in those cases
  usersArray: User[];
  recipesArray: Recipe[];
  cookBookArray: Cookbook[];
  searchText: String;

  constructor(
    private userService: UsersService,
    private recipeService: RecipeService,
    private cookbookService: CookBookService
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().then(
      response => { this.populateUserArray(response);}
    )
  }

  populateUserArray(response) {
   for (let r of response) {
         this.usersArray.push(r);
   }
  }

}
