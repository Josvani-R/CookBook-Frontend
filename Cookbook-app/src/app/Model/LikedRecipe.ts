import {User} from './User';
import {Recipe} from './Recipe';

export interface LikedRecipe{
  id: number;
  user: User;
  recipe: Recipe;
}
