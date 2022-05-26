import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLearnComponent } from './add-learn.component';

describe('AddLearnComponent', () => {
  let component: AddLearnComponent;
  let fixture: ComponentFixture<AddLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
