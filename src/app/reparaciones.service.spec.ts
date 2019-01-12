import { TestBed } from '@angular/core/testing';

import { ReparacionesService } from './reparaciones.service';

describe('ReparacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReparacionesService = TestBed.get(ReparacionesService);
    expect(service).toBeTruthy();
  });
});
