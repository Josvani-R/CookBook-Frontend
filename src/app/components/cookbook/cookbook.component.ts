import { Component, OnInit, Input, Inject } from '@angular/core';
import { Cookbook } from 'src/app/Model/Cookbook';
import { RecipemodalComponent } from '../recipemodal/recipemodal.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {
  animal: string = 'lion';

@Input()
cookbook: Cookbook;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(RecipemodalComponent, {
      data: {
        animal: this.animal
      }
    });
  }

}
