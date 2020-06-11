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
import { PexelService } from 'src/app/service/pexel.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;
  cookbooks: Cookbook[];
  likedRecipes: LikedRecipe[];
  photo: string;
  photographer: string;
  photographer_url: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private cookbookService: CookBookService,
    private likedRecipeService: LikedRecipeService,
    public dialog: MatDialog,
    private pexelService: PexelService
  ) {}

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getUserById();
    this.getCookBooksById();
    this.getAllRecipiesById();
    this.getAllFavoriteRecipesById();
    this.getPhotoBackground();
  }

  getPhotoBackground(): void {
    this.pexelService
      .getRandomPhotos('cooking')
      .then((res) => {
        let randomPhoto = Math.round(Math.random() * res.photos.length);
        this.photo = res.photos[randomPhoto].src.large2x;
        console.log(res);

        this.photographer = res.photos[randomPhoto].photographer;
        this.photographer_url = res.photos[randomPhoto].photographer_url;
      })
      .catch((error) => {
        console.log(error);
      });
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
