import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewLopComponent } from './addnew-lop.component';

describe('AddnewLopComponent', () => {
  let component: AddnewLopComponent;
  let fixture: ComponentFixture<AddnewLopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewLopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewLopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
