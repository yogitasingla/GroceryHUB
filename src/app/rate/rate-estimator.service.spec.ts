import { TestBed } from '@angular/core/testing';

import { RateEstimatorService } from './rate-estimator.service';

describe('RateEstimatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RateEstimatorService = TestBed.get(RateEstimatorService);
    expect(service).toBeTruthy();
  });
});
