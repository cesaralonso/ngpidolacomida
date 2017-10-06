import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionContainerComponent } from './ubicacion-container.component';

describe('UbicacionContainerComponent', () => {
  let component: UbicacionContainerComponent;
  let fixture: ComponentFixture<UbicacionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
