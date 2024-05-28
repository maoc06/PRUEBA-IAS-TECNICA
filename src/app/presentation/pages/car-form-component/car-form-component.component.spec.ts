import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormComponentComponent } from './car-form-component.component';

describe('CarFormComponentComponent', () => {
  let component: CarFormComponentComponent;
  let fixture: ComponentFixture<CarFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
