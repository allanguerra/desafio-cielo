import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExtratoComponent } from './card-extrato.component';

describe('CardExtratoComponent', () => {
  let component: CardExtratoComponent;
  let fixture: ComponentFixture<CardExtratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExtratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
