import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloHorarioComponent } from './platillo-horario.component';

describe('PlatilloHorarioComponent', () => {
  let component: PlatilloHorarioComponent;
  let fixture: ComponentFixture<PlatilloHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
