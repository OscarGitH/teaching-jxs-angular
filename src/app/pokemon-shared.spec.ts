import { TestBed } from '@angular/core/testing';

import { PokemonSharedService } from './pokemon-shared';

describe('PokemonShared', () => {
  let service: PokemonSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
