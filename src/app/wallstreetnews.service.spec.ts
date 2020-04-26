import { TestBed } from '@angular/core/testing';

import { Wallstreetnews } from './wallstreetnews.service';

describe('Wallstreetnews', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Wallstreetnews = TestBed.get(Wallstreetnews);
    expect(service).toBeTruthy();
  });
});
