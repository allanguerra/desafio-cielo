import { TestBed } from '@angular/core/testing';

import { ExtratoLancamentosService } from './extrato-lancamentos.service';

describe('ExtratoLancamentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtratoLancamentosService = TestBed.get(ExtratoLancamentosService);
    expect(service).toBeTruthy();
  });
});
