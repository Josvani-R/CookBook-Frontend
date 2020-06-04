import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import {RecipedetailComponent} from './components/recipedetail/recipedetail.component';

const routes: Routes = [
{path: 'homepage', component: HomepageComponent},
{path: 'recipe/:id', component: RecipedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
