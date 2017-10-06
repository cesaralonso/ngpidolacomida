import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionContainerComponent } from './confirmacion-container.component';

describe('ConfirmacionContainerComponent', () => {
  let component: ConfirmacionContainerComponent;
  let fixture: ComponentFixture<ConfirmacionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
