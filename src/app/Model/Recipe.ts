import {Cookbook} from './Cookbook';

export interface Recipe{
  id: number;
  cookbook: Cookbook;
  name: string;
  instructions: string;
  photoKey: string;
}
