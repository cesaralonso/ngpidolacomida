import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaprestaurantesComponent } from './maprestaurantes.component';

describe('MaprestaurantesComponent', () => {
  let component: MaprestaurantesComponent;
  let fixture: ComponentFixture<MaprestaurantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaprestaurantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaprestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
