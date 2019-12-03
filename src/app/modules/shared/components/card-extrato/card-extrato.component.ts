import { Component, OnInit, Input } from '@angular/core';
import { ExtratoLancamento } from '../../models/extrato-lancamento.model';

@Component({
  selector: 'card-extrato',
  templateUrl: './card-extrato.component.html',
  styleUrls: ['./card-extrato.component.scss']
})
export class CardExtratoComponent implements OnInit {

  @Input()
  extratoLancamento: ExtratoLancamento;

  constructor() { }

  ngOnInit() {
  }

}
