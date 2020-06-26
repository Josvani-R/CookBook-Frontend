import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Ingredient } from 'src/app/Model/ingredient';
import { Recipe } from 'src/app/Model/Recipe';
import { RecipeService } from 'src/app/service/recipe.service';

export interface DialogData {
  ingredients: Ingredient[];
  recipe: Recipe;

}

@Component({
  selector: 'app-edit-recipe-modal',
  templateUrl: './edit-recipe-modal.component.html',
  styleUrls: ['./edit-recipe-modal.component.scss']
})
export class EditRecipeModalComponent implements OnInit {
  editRecipe: Recipe;
  constructor( public dialogRef: MatDialogRef<EditRecipeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.getRecipe();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getRecipe() {
    this.recipeService.getRecipeById(this.data.recipe.id)
    .then(res=>{
      this.editRecipe = res

    })
  }
  updateRecipe(){
    this.recipeService.updateRecipe(this.editRecipe)
    .then(res=>{
      this.data.recipe.name = res.name;
      this.data.recipe.instructions = res.instructions;
    })
    console.log(this.editRecipe)
  }

}
