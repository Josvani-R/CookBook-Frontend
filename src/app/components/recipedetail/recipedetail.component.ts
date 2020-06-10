import { Component, OnInit } from '@angular/core';
import {RecipeService} from 'src/app/service/recipe.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Recipe} from 'src/app/Model/Recipe';
import {Ingredient} from 'src/app/Model/ingredient';
import {IngredientService} from 'src/app/service/ingredient.service';
import {Cookbook}  from 'src/app/Model/Cookbook';
import {PexelService} from 'src/app/service/pexel.service';
@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {
  ingredients;
  recipe;
photo;

  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private location: Location,
    private pexelService: PexelService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.getRecipe(id);
    this.getIngredients(id);
    this.getPhotoBackground();
   
  }

  getRecipe(id) {
    this.recipeService.getRecipeById(id)
    .then( response => {this.recipe = response}); 


}

getIngredients(id) {
  this.ingredientService.getIngredientsByRecipeId(id)
  .then( response => {this.ingredients = response});
  
}

getPhotoBackground(): void {
 
  this.pexelService
    .getRandomPhotos(`food`)
    .then((res) => {
      this.photo =
        res.photos[Math.round(Math.random() * res.photos.length)].src.large2x;
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}


}