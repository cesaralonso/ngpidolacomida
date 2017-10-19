import { TestBed, inject } from '@angular/core/testing';

import { BasicRequestsService } from './basic-requests.service';

describe('BasicRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicRequestsService]
    });
  });

  it('should be created', inject([BasicRequestsService], (service: BasicRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
