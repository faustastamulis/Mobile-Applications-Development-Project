import { TestBed } from '@angular/core/testing';

import { UsanewsService } from './usanews.service';

describe('UsanewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsanewsService = TestBed.get(UsanewsService);
    expect(service).toBeTruthy();
  });
});
