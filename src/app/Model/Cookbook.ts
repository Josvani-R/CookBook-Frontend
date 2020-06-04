import {User} from './User';

export interface Cookbook{
  id: number;
  user:User;
  title: string;
  description: string;
  photokey:string;
}
