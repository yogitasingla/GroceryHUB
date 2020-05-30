import { TestBed } from '@angular/core/testing';

import { ShowShopService } from './show-shop.service';

describe('ShowShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowShopService = TestBed.get(ShowShopService);
    expect(service).toBeTruthy();
  });
});
