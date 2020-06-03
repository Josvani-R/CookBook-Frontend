import { Component, OnInit, Input } from '@angular/core';
import { Cookbook } from 'src/app/Model/Cookbook';


@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {
@Input()
cookbook: Cookbook;
  constructor() { }

  ngOnInit(): void {
  }

}
