import { TestBed } from '@angular/core/testing';

import { UKNewsService } from './uknews.service';

describe('UKNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UKNewsService = TestBed.get(UKNewsService);
    expect(service).toBeTruthy();
  });
});
