import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemInputCaractComponent } from './mensagem-input-caract.component';

describe('MensagemInputCaractComponent', () => {
  let component: MensagemInputCaractComponent;
  let fixture: ComponentFixture<MensagemInputCaractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemInputCaractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemInputCaractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
