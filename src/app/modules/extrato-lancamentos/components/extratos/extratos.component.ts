import { Component, OnInit } from '@angular/core';
import { ExtratoLancamento } from 'src/app/modules/shared/models/extrato-lancamento.model';
import { ExtratoLancamentosService } from '../../services/extrato-lancamentos.service';

@Component({
  selector: 'app-extratos',
  templateUrl: './extratos.component.html'
})
export class ExtratosComponent implements OnInit {

  lancamentos: ExtratoLancamento[] = [];

  constructor(
    private service: ExtratoLancamentosService
  ) { }

  ngOnInit() {
    this.buscarExtratoLancamentos();
  }

  buscarExtratoLancamentos() {
    this.service.buscarExtratoLancamentos()
      .subscribe( response => this.lancamentos = response);
  }

}
