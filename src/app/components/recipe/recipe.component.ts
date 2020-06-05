import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/Model/Recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;
  @Input()
  favorite: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
