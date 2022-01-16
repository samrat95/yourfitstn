import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGyminfoComponent } from './admin-gyminfo.component';

describe('AdminGyminfoComponent', () => {
  let component: AdminGyminfoComponent;
  let fixture: ComponentFixture<AdminGyminfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGyminfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGyminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
