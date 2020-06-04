import {Cookbook} from './Cookbook';

export interface Recipe{
  id: number;
  cookbook: Cookbook;
  name: string;
  description: string;
  pic: string;
}
