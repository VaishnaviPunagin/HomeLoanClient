import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCustomerComponent } from './detailed-customer.component';

describe('DetailedCustomerComponent', () => {
  let component: DetailedCustomerComponent;
  let fixture: ComponentFixture<DetailedCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
