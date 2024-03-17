import { TestBed } from '@angular/core/testing';

import { YvesServiceService } from './yves-service.service';

describe('YvesServiceService', () => {
  let service: YvesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YvesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
