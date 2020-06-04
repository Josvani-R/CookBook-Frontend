import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipemodalComponent } from './recipemodal.component';

describe('RecipemodalComponent', () => {
  let component: RecipemodalComponent;
  let fixture: ComponentFixture<RecipemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
