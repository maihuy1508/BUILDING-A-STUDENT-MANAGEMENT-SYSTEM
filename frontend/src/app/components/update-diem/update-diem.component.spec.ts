import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDiemComponent } from './update-diem.component';

describe('UpdateDiemComponent', () => {
  let component: UpdateDiemComponent;
  let fixture: ComponentFixture<UpdateDiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDiemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
