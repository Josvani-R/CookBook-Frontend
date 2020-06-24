import { Component, OnInit} from '@angular/core';
import {RecipeService} from 'src/app/service/recipe.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Recipe} from 'src/app/Model/Recipe';
import {Ingredient} from 'src/app/Model/ingredient';
import {IngredientService} from 'src/app/service/ingredient.service';
import {Cookbook}  from 'src/app/Model/Cookbook';
import {PexelService} from 'src/app/service/pexel.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditRecipeModalComponent } from '../edit-recipe-modal/edit-recipe-modal.component';
import { StarRatingComponent } from 'ng-starrating';
@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {
  ingredients: Ingredient[] =[];
  recipe;
  photo;
  isRecipe: boolean;

  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private location: Location,
    private pexelService: PexelService,
    public dialog: MatDialog,
    
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.getRecipe(id);
    this.getIngredients(id);

   
  }

  getRecipe(id) {
    this.recipeService.getRecipeById(id)
    .then( response => {this.recipe = response;
      this.getPhotoBackground();
      this.isRecipe = this.recipe.user.id == localStorage.getItem('userId');
      console.log(localStorage.getItem('userId'));
      console.log(this.recipe.user.id);
      console.log(this.isRecipe)
    }); 

}

getIngredients(id) {
  this.ingredientService.getIngredientsByRecipeId(id)
  .then( response => {this.ingredients = response;
  console.log(response)});
  
}

getPhotoBackground(): void {
 
  this.pexelService
    .getRandomPhotos(`${this.recipe.name}`)
    .then((res) => {
      this.photo =
        res.photos[Math.round(Math.random() * res.photos.length)].src.large2x;
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}

openEditRecipeDialog(): void {
  const dialogRef = this.dialog.open(EditRecipeModalComponent, {
    width: '250px',
    data: {ingredients: this.ingredients,
    recipe: this.recipe}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    this.ingredients = result;
  });


}


onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  alert(`Old Value:${$event.oldValue}, 
    New Value: ${$event.newValue}, 
    Checked Color: ${$event.starRating.checkedcolor}, 
    Unchecked Color: ${$event.starRating.uncheckedcolor}`);
}


}