import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionCrearComponent } from './ubicacion-crear.component';

describe('UbicacionCrearComponent', () => {
  let component: UbicacionCrearComponent;
  let fixture: ComponentFixture<UbicacionCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
