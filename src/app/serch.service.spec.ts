import { TestBed } from '@angular/core/testing';

import { SerchService } from './services/serch.service';

describe('SerchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerchService = TestBed.get(SerchService);
    expect(service).toBeTruthy();
  });
});
