import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarContainerComponent } from './pagar-container.component';

describe('PagarContainerComponent', () => {
  let component: PagarContainerComponent;
  let fixture: ComponentFixture<PagarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
