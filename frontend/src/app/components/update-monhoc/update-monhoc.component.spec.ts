import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMonhocComponent } from './update-monhoc.component';

describe('UpdateMonhocComponent', () => {
  let component: UpdateMonhocComponent;
  let fixture: ComponentFixture<UpdateMonhocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMonhocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
