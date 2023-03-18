import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsvComponent } from './modalsv.component';

describe('ModalsvComponent', () => {
  let component: ModalsvComponent;
  let fixture: ComponentFixture<ModalsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
