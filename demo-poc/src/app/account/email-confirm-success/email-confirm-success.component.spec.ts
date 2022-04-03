import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfirmSuccessComponent } from './email-confirm-success.component';

describe('EmailConfirmSuccessComponent', () => {
  let component: EmailConfirmSuccessComponent;
  let fixture: ComponentFixture<EmailConfirmSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailConfirmSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfirmSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
