import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RecipedetailComponent } from './components/recipedetail/recipedetail.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'recipe/:id', component: RecipedetailComponent },
  { path: '', component: LoginFormComponent },
  { path: 'profile/:id', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
