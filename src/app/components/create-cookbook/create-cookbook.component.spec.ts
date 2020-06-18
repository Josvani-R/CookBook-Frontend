import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCookbookComponent } from './create-cookbook.component';

describe('CreateCookbookComponent', () => {
  let component: CreateCookbookComponent;
  let fixture: ComponentFixture<CreateCookbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCookbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
