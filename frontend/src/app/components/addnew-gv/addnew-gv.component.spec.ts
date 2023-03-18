import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewGvComponent } from './addnew-gv.component';

describe('AddnewGvComponent', () => {
  let component: AddnewGvComponent;
  let fixture: ComponentFixture<AddnewGvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewGvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewGvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
