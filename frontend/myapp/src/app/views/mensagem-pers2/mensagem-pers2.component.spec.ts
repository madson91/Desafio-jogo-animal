import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemPers2Component } from './mensagem-pers2.component';

describe('MensagemPers2Component', () => {
  let component: MensagemPers2Component;
  let fixture: ComponentFixture<MensagemPers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemPers2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemPers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
