import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarPlatillosComponent } from './pagar-platillos.component';

describe('PagarPlatillosComponent', () => {
  let component: PagarPlatillosComponent;
  let fixture: ComponentFixture<PagarPlatillosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarPlatillosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarPlatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
