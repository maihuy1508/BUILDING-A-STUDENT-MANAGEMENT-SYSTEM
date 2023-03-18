import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewMonhocComponent } from './addnew-monhoc.component';

describe('AddnewMonhocComponent', () => {
  let component: AddnewMonhocComponent;
  let fixture: ComponentFixture<AddnewMonhocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewMonhocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewMonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
