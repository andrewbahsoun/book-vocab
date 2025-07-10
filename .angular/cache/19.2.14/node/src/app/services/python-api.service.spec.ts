import { TestBed } from '@angular/core/testing';

import { PythonAPIService } from './python-api.service';

describe('PythonAPIService', () => {
  let service: PythonAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
