import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSVComponent } from './update-sv.component';

describe('UpdateSVComponent', () => {
  let component: UpdateSVComponent;
  let fixture: ComponentFixture<UpdateSVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
