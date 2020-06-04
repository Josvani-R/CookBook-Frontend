import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';
import {Ingredient} from '../Model/Ingredient';
@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  url: string = environment.ingredientURI;
  constructor(
    private http: HttpClient
  ) { }

  getAllIngredients(): Promise<Ingredient[]> {
   return this.http.get<Ingredient[]>(`${this.url}`).toPromise();
  }

  getIngredientsByRecipeId(id: number): Promise<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.url}/recipes/${id}`).toPromise();
  }

  getIngredientById(id: number): Promise<Ingredient> {
    return this.http.get<Ingredient>(`${this.url}/${id}`).toPromise();
  }

  createIngredient(ingredient: Ingredient): Promise<Ingredient> {
    return this.http.post<Ingredient>(`${this.url}`, ingredient).toPromise();
  }

  deleteIngredientById(ingredient: Ingredient): Promise<Ingredient> {
    return this.http.delete<Ingredient>(`${this.url}`).toPromise();
  }


}
