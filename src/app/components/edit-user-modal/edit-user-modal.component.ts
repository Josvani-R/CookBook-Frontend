import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/Model/User';
import { NgModule } from '@angular/core';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
})
export class EditUserModalComponent implements OnInit {
  editUser: User;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUser();
    console.log(this.data);
  }

  getUser() {
    this.userService
      .getUserById(this.data.user.id)
      .then((res) => {
        this.editUser = res;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateUser() {
    console.log(this.editUser);

    this.userService
      .updateUser(this.editUser)
      .then((res) => {
        this.data.user.firstName = this.editUser.firstName;
        this.data.user.lastName = this.editUser.lastName;
        this.data.user.username = this.editUser.username;
        this.snackBar.open(
          `Thank you ${this.editUser.firstName}, Profile has been updated!`,
          '',
          {
            duration: 2000,
            direction: 'ltr',
            politeness: 'assertive',
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'success',
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
