import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensagem2Component } from './mensagem2.component';

describe('Mensagem2Component', () => {
  let component: Mensagem2Component;
  let fixture: ComponentFixture<Mensagem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensagem2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensagem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
