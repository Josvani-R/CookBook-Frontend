import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UsersService } from 'src/app/service/users.service';
import { CookBookService } from 'src/app/service/cook-book.service';
import { Cookbook } from 'src/app/Model/Cookbook';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from 'src/app/Model/Recipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
@Input()
user: User;
cookbooks: Cookbook[] = [];
recipes: Recipe[] = [];



  constructor(private cookbookService: CookBookService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getCookbooksById();
    this.getRecipesByUserId();

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

  getRecipesByUserId(): void{
    let id = this.user.id;
    this.recipeService.getRecipesByUserId(id)
    .then(data => {
      this.recipes = data;
    })
    .catch(error => {
      (console.log(error));
    }
    );
  }


}
