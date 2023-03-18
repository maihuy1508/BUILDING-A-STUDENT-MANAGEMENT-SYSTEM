import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLopComponent } from './update-lop.component';

describe('UpdateLopComponent', () => {
  let component: UpdateLopComponent;
  let fixture: ComponentFixture<UpdateLopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
