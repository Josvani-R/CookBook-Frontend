import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LikedRecipe } from '../Model/LikedRecipe';

@Injectable({
  providedIn: 'root',
})
export class LikedRecipeService {
  url: string = environment.likedRecipeURI;
  constructor(private http: HttpClient) {}

  getLikedRecipesById(id: number): Promise<LikedRecipe[]> {
    return this.http.get<LikedRecipe[]>(`${this.url}/users/${id}`).toPromise();
  }
}
