import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';
import { CookBookService } from 'src/app/service/cook-book.service';
import { Cookbook } from 'src/app/Model/Cookbook';
import { RecipeService } from 'src/app/service/recipe.service';
import { LikedRecipe } from 'src/app/Model/LikedRecipe';
import { LikedRecipeService } from 'src/app/service/liked-recipe.service';
import { MatDialog } from '@angular/material/dialog';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;
  cookbooks: Cookbook[];
  likedRecipes: LikedRecipe[];

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private cookbookService: CookBookService,
    private likedRecipeService: LikedRecipeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUserById();
    this.getCookBooksById();
    this.getAllRecipiesById();
    this.getAllFavoriteRecipesById();
  }

  getCookBooksById() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.cookbookService
      .getAllCookbooksById(id)
      .then((data) => {
        this.cookbooks = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getUserById() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).then((res) => {
      console.log(res);
      this.user = res;
    });
  }

  getAllRecipiesById() {}

  getAllFavoriteRecipesById() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.likedRecipeService
      .getLikedRecipesById(id)
      .then((data) => {
        console.log(data);
        this.likedRecipes = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openDialog() {
    this.dialog.open(EditUserModalComponent, {
      data: {
        user: this.user,
      },
    });
  }
}
