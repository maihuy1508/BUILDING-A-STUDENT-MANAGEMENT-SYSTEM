import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiemComponent } from './diem.component';

describe('DiemComponent', () => {
  let component: DiemComponent;
  let fixture: ComponentFixture<DiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
