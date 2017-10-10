import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasInfoComponent } from './ofertas-info.component';

describe('OfertasInfoComponent', () => {
  let component: OfertasInfoComponent;
  let fixture: ComponentFixture<OfertasInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
