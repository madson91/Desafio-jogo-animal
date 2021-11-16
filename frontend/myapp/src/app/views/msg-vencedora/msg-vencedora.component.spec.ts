import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgVencedoraComponent } from './msg-vencedora.component';

describe('MsgVencedoraComponent', () => {
  let component: MsgVencedoraComponent;
  let fixture: ComponentFixture<MsgVencedoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgVencedoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgVencedoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
