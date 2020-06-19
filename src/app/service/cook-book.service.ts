import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cookbook } from '../Model/Cookbook';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CookBookService {

  url: string = environment.cookBookURI;
  constructor(
    private http: HttpClient,

  ){}

getAllCookbooks(): Promise<Cookbook[]>{
  console.log('hello');
  return this.http.get<Cookbook[]>(`${this.url}`).toPromise();
}

getAllCookbooksById(id: number): Promise<Cookbook[]>{
  console.log('hello');
  return this.http.get<Cookbook[]>(`${this.url}/users/${id}`).toPromise();
}

createCookbook(cookbook: Cookbook): Promise<Cookbook>{
 return this.http.post<Cookbook>(`${this.url}`, cookbook).toPromise();
}


}
