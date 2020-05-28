import {User} from './User';

export interface Cookbook{
  id: number;
  user:User;
  name: string;
  Description: string;
}
