import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Ingredient } from 'src/app/Model/ingredient';
import { Recipe } from 'src/app/Model/Recipe';

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

  constructor( public dialogRef: MatDialogRef<EditRecipeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
