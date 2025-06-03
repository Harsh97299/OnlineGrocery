import { TestBed } from '@angular/core/testing';

import { TransAuthService } from './trans-auth.service';

describe('TransAuthService', () => {
  let service: TransAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
