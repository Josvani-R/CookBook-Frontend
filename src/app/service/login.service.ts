import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';
import { environment } from '../../environments/environment';
import {UsersService} from 'src/app/service/users.service'
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.loginURI;
  constructor(
    private http: HttpClient,
    private usersService: UsersService
  ) { }

  login(email: string, password: string) {
    return this.http.get<any>(`${this.url}/${email}/${password}`).toPromise();
  }
}
