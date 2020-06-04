import {User} from './User';
import {Recipe} from './Recipe';

export interface RateRecipe{
  id:number;
  rating: number;
  user: User;
  recipe: Recipe;
}
