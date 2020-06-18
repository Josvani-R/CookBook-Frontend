import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RecipedetailComponent } from './components/recipedetail/recipedetail.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {AuthenticatorGuard} from 'src/app/authenticator.guard';
import { ProfileComponent } from './components/profile/profile.component';
import {CreateRecipeComponent} from './components/create-recipe/create-recipe.component'
import { CreateCookbookComponent } from './components/create-cookbook/create-cookbook.component';


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'recipe/:id', component: RecipedetailComponent },
  { path: '', component: LoginFormComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'create-recipe', component: CreateRecipeComponent},
  { path: 'create-cookbook', component: CreateCookbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
