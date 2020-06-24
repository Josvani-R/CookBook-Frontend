import {Cookbook} from './Cookbook';
import { User } from './User';

export interface Recipe{
  id: number;
  cookbook: Cookbook;
  name: string;
  instructions: string;
  pic: string;
  user: User;
}
