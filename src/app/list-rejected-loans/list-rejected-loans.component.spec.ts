import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRejectedLoansComponent } from './list-rejected-loans.component';

describe('ListRejectedLoansComponent', () => {
  let component: ListRejectedLoansComponent;
  let fixture: ComponentFixture<ListRejectedLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRejectedLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRejectedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
