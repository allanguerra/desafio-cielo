import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExtratoLancamento } from '../../shared/models/extrato-lancamento.model';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExtratoLancamentosService {

  constructor(
    private http: HttpClient
  ) { }

  buscarExtratoLancamentos(): Observable<ExtratoLancamento[]> {
    return this.http.get<ExtratoLancamento[]>(`${environment.api}/extrato-lancamento`);
  }
}
