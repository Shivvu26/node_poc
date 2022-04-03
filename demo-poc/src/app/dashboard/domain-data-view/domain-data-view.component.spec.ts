import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainDataViewComponent } from './domain-data-view.component';

describe('DomainDataViewComponent', () => {
  let component: DomainDataViewComponent;
  let fixture: ComponentFixture<DomainDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
