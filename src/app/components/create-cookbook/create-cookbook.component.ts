import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-cookbook',
  templateUrl: './create-cookbook.component.html',
  styleUrls: ['./create-cookbook.component.scss']
})
export class CreateCookbookComponent implements OnInit {

  cookbookFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cookbookFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  

}
