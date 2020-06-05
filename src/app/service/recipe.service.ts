import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../Model/Recipe';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  url: string = environment.recipeURI;
  constructor(private http: HttpClient) {}

  getRecipesByCookbookId(id: number): Promise<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.url}/cookbooks/${id}`).toPromise();
  }

  createRecipe(recipe: Recipe): Promise<Recipe> {
    return this.http.post<Recipe>(`${this.url}`, recipe).toPromise();
  }

  updateRecipe(recipe: Recipe): Promise<Recipe> {
    return this.http.put<Recipe>(`${this.url}`, recipe).toPromise();
  }

  deleteRecipeById(id: number): Promise<Recipe> {
    return this.http.delete<Recipe>(`${this.url}/${id}`).toPromise();
  }

  getAllRecipes(): Promise<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.url}`).toPromise();
  }
}
