import { TestBed } from '@angular/core/testing';

import { EtatConnexion } from './etat-connexion';

describe('EtatConnexion', () => {
  let service: EtatConnexion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatConnexion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
