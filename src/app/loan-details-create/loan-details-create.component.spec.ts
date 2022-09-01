import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsCreateComponent } from './loan-details-create.component';

describe('LoanDetailsCreateComponent', () => {
  let component: LoanDetailsCreateComponent;
  let fixture: ComponentFixture<LoanDetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDetailsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
