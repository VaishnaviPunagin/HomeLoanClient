import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerificationRequiredComponent } from './list-verification-required.component';

describe('ListVerificationRequiredComponent', () => {
  let component: ListVerificationRequiredComponent;
  let fixture: ComponentFixture<ListVerificationRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVerificationRequiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVerificationRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
