import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCookbookModalComponent } from './create-cookbook-modal.component';

describe('CreateCookbookModalComponent', () => {
  let component: CreateCookbookModalComponent;
  let fixture: ComponentFixture<CreateCookbookModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCookbookModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCookbookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
