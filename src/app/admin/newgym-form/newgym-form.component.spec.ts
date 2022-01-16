import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgymFormComponent } from './newgym-form.component';

describe('NewgymFormComponent', () => {
  let component: NewgymFormComponent;
  let fixture: ComponentFixture<NewgymFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgymFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgymFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
