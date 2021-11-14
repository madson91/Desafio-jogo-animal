import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemImputComponent } from './mensagem-imput.component';

describe('MensagemImputComponent', () => {
  let component: MensagemImputComponent;
  let fixture: ComponentFixture<MensagemImputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemImputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
