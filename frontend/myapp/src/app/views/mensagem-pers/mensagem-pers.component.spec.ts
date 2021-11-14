import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemPersComponent } from './mensagem-pers.component';

describe('MensagemPersComponent', () => {
  let component: MensagemPersComponent;
  let fixture: ComponentFixture<MensagemPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemPersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
