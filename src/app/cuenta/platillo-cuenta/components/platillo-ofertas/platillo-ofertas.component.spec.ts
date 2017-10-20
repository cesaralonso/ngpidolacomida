import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloOfertasComponent } from './platillo-ofertas.component';

describe('PlatilloOfertasComponent', () => {
  let component: PlatilloOfertasComponent;
  let fixture: ComponentFixture<PlatilloOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
