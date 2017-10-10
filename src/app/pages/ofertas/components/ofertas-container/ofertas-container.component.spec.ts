import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasContainerComponent } from './ofertas-container.component';

describe('OfertasContainerComponent', () => {
  let component: OfertasContainerComponent;
  let fixture: ComponentFixture<OfertasContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
