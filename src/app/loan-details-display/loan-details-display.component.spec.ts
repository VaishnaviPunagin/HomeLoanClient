import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsDisplayComponent } from './loan-details-display.component';

describe('LoanDetailsDisplayComponent', () => {
  let component: LoanDetailsDisplayComponent;
  let fixture: ComponentFixture<LoanDetailsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDetailsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDetailsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
