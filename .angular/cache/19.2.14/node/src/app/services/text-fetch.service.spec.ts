import { TestBed } from '@angular/core/testing';

import { TextFetcherService } from './text-fetch.service';

describe('TextFetchService', () => {
  let service: TextFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
