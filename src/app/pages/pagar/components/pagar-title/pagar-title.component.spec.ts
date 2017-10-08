import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarTitleComponent } from './pagar-title.component';

describe('PagarTitleComponent', () => {
  let component: PagarTitleComponent;
  let fixture: ComponentFixture<PagarTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
