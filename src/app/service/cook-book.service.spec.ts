import { TestBed } from '@angular/core/testing';

import { CookBookService } from './cook-book.service';

describe('CookBookService', () => {
  let service: CookBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
