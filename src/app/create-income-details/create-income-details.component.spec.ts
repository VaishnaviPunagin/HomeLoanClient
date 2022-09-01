import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIncomeDetailsComponent } from './create-income-details.component';

describe('CreateIncomeDetailsComponent', () => {
  let component: CreateIncomeDetailsComponent;
  let fixture: ComponentFixture<CreateIncomeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIncomeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIncomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
