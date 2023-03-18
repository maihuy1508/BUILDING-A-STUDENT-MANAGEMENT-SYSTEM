import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewDiemComponent } from './addnew-diem.component';

describe('AddnewDiemComponent', () => {
  let component: AddnewDiemComponent;
  let fixture: ComponentFixture<AddnewDiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewDiemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewDiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
