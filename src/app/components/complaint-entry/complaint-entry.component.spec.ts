import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintEntryComponent } from './complaint-entry.component';

describe('ComplaintEntryComponent', () => {
  let component: ComplaintEntryComponent;
  let fixture: ComponentFixture<ComplaintEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
