import { TestBed } from '@angular/core/testing';

import { GetBookByIdService } from './get-book-by-id.service';

describe('GetBookByIdService', () => {
  let service: GetBookByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBookByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
