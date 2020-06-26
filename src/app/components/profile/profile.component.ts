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
import { Recipe } from 'src/app/Model/Recipe';
import { CreateCookbookComponent } from '../create-cookbook/create-cookbook.component';
import { CreateCookbookModalComponent } from '../create-cookbook-modal/create-cookbook-modal.component';

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
  recipes: Recipe[] = [];
  userId: number = parseInt(this.route.snapshot.paramMap.get('id'));
  isUser: boolean = this.userId == localStorage.userId;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private cookbookService: CookBookService,
    private likedRecipeService: LikedRecipeService,
    public dialog: MatDialog,
    private pexelService: PexelService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.getUserById();
    this.getCookBooksById();
    this.getRecipesByUserId();
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
    this.cookbookService
      .getAllCookbooksById(this.userId)
      .then((data) => {
        this.cookbooks = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getUserById() {
    this.userService.getUserById(this.userId).then((res) => {
      console.log(res);
      this.user = res;
    });
  }

  getRecipesByUserId(): void{
    this.recipeService.getRecipesByUserId(this.userId)
    .then(data => {
      console.log(data);
      this.recipes = data;
    })
    .catch(error => {
      (console.log(error));
    }
    );
  }

  getAllFavoriteRecipesById() {
    this.likedRecipeService
      .getLikedRecipesById(this.userId)
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

  openCreateDialog(){
    this.dialog.open(CreateCookbookModalComponent);
  }
}
