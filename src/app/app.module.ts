import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { from } from 'rxjs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './components/nav/nav.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { RecipedetailComponent } from './components/recipedetail/recipedetail.component';
import { RecipemodalComponent } from './components/recipemodal/recipemodal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RecipeComponent } from './components/recipe/recipe.component';
import { MatBadgeModule } from '@angular/material/badge';
import { EditUserModalComponent } from './components/edit-user-modal/edit-user-modal.component';
import { UserComponent } from './components/user/user.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { CreateCookbookComponent } from './components/create-cookbook/create-cookbook.component';
import { CreateCookbookModalComponent } from './components/create-cookbook-modal/create-cookbook-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NavComponent,
    HomepageComponent,
    CookbookComponent,
    RecipedetailComponent,
    RecipemodalComponent,
    CookbookComponent,
    SearchBarComponent,
    FilterPipe,
    ProfileComponent,
    RecipeComponent,
    EditUserModalComponent,
    UserComponent,
    CreateRecipeComponent,
    CreateCookbookComponent,
    CreateCookbookModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule,
    MatBadgeModule,
    MatCarouselModule.forRoot(),
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
