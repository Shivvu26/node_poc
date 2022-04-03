import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpConfirmComponent } from './otp-confirm.component';

describe('OtpConfirmComponent', () => {
  let component: OtpConfirmComponent;
  let fixture: ComponentFixture<OtpConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
