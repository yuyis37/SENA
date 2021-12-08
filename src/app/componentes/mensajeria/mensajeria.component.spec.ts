import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeriaComponent } from './mensajeria.component';

describe('MensajeriaComponent', () => {
  let component: MensajeriaComponent;
  let fixture: ComponentFixture<MensajeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
