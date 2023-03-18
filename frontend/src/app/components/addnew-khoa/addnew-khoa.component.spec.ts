import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewKhoaComponent } from './addnew-khoa.component';

describe('AddnewKhoaComponent', () => {
  let component: AddnewKhoaComponent;
  let fixture: ComponentFixture<AddnewKhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewKhoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
