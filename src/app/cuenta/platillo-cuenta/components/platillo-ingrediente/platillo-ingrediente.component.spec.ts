import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloIngredienteComponent } from './platillo-ingrediente.component';

describe('PlatilloIngredienteComponent', () => {
  let component: PlatilloIngredienteComponent;
  let fixture: ComponentFixture<PlatilloIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
