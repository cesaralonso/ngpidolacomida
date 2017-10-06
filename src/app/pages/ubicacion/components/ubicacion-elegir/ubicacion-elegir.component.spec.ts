import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionElegirComponent } from './ubicacion-elegir.component';

describe('UbicacionElegirComponent', () => {
  let component: UbicacionElegirComponent;
  let fixture: ComponentFixture<UbicacionElegirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionElegirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionElegirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
