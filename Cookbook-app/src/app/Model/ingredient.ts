import {Recipe} from './Recipe';

export interface Ingredient{
  id: number;
  recipe: Recipe;
  name: string;
  amount: number;
}
