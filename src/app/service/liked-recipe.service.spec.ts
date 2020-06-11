import { TestBed } from '@angular/core/testing';

import { LikedRecipeService } from './liked-recipe.service';

describe('LikedRecipeService', () => {
  let service: LikedRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
