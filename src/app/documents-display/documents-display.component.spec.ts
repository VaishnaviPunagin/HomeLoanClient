import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDisplayComponent } from './documents-display.component';

describe('DocumentsDisplayComponent', () => {
  let component: DocumentsDisplayComponent;
  let fixture: ComponentFixture<DocumentsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
