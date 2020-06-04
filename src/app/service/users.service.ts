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

getAllUsers():Promise<User[]>{
  console.log('hello');
  return this.http.get<User[]>(`${this.url}`).toPromise();
}

getUserById(id: number): Promise<User> {
  return this.http.get<User>(`${this.url}/${id}`).toPromise();
}

deleteUserById(id: number): Promise<User> {
  return this.http.delete<User>(`${this.url}/${id}`).toPromise();
}
 
createUser(user: User): Promise<User> {
  return this.http.post<User>(`${this.url}`, user).toPromise();
}

updateUser(user: User): Promise<User> {
  return this.http.put<User>(`${this.url}`, user).toPromise();
}


}
