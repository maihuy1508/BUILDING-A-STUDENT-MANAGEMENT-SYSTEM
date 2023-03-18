import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtsvComponent } from './ttsv.component';

describe('TtsvComponent', () => {
  let component: TtsvComponent;
  let fixture: ComponentFixture<TtsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
