import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApprovedLoansComponent } from './list-approved-loans.component';

describe('ListApprovedLoansComponent', () => {
  let component: ListApprovedLoansComponent;
  let fixture: ComponentFixture<ListApprovedLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApprovedLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListApprovedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
