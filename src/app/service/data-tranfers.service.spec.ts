import { TestBed } from '@angular/core/testing';

import { DataTranfersService } from './data-tranfers.service';

describe('DataTranfersService', () => {
  let service: DataTranfersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTranfersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
