import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeDetailsDisplayComponent } from './income-details-display.component';

describe('IncomeDetailsDisplayComponent', () => {
  let component: IncomeDetailsDisplayComponent;
  let fixture: ComponentFixture<IncomeDetailsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeDetailsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeDetailsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
