import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKhoaComponent } from './update-khoa.component';

describe('UpdateKhoaComponent', () => {
  let component: UpdateKhoaComponent;
  let fixture: ComponentFixture<UpdateKhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKhoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
