import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGvComponent } from './update-gv.component';

describe('UpdateGvComponent', () => {
  let component: UpdateGvComponent;
  let fixture: ComponentFixture<UpdateGvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
