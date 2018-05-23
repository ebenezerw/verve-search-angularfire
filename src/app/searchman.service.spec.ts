import { TestBed, inject } from '@angular/core/testing';

import { SearchmanService } from './searchman.service';

describe('SearchmanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchmanService]
    });
  });

  it('should be created', inject([SearchmanService], (service: SearchmanService) => {
    expect(service).toBeTruthy();
  }));
});
