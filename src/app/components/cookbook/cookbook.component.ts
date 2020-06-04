

import { Component, OnInit, Input, Inject } from '@angular/core';
import { Cookbook } from 'src/app/Model/Cookbook';
import { RecipemodalComponent } from '../recipemodal/recipemodal.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from 'src/app/Model/Recipe';



@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {


  recipes: Recipe[];

@Input()
cookbook: Cookbook;
  constructor(public dialog: MatDialog, private recipeService: RecipeService ) { }



  ngOnInit(): void {
  }



  openDialog() {

    this.dialog.open(RecipemodalComponent, {
      data: {
        recipes: this.recipes,
      }
    });
  }

  getRecipesByCookbookId(){
    this.recipeService.getRecipesByCookbookId(this.cookbook.id)
    .then(res => {
    this.recipes = res;
    this.openDialog();
    console.log(res);
      });
  }

}
