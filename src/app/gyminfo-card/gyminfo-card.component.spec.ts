import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyminfoCardComponent } from './gyminfo-card.component';

describe('GyminfoCardComponent', () => {
  let component: GyminfoCardComponent;
  let fixture: ComponentFixture<GyminfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyminfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GyminfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
