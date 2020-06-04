import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';
import { environment } from '../../environments/environment';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = environment.userURI;
  constructor(
    private http: HttpClient,

  ){}

getAllUsers(): Promise<User[]>{
  console.log('hello');
  return this.http.get<User[]>(`${this.url}`).toPromise();
}
}
