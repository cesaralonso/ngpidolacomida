import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAllComponent } from './restaurant-all.component';

describe('RestaurantAllComponent', () => {
  let component: RestaurantAllComponent;
  let fixture: ComponentFixture<RestaurantAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
