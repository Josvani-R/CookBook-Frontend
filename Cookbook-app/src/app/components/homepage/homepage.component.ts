import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  user1: User = {
    id: 1,
    username: 'jojo',
    password: 'password',
    firstname: 'josvani',
    lastname: 'rivera',
    url: 'url',
    admin: true

  }


  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().then(res => {console.log(res)}).catch(error => {console.log(error)});
  }

}
