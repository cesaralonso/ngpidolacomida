import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionInfoComponent } from './confirmacion-info.component';

describe('ConfirmacionInfoComponent', () => {
  let component: ConfirmacionInfoComponent;
  let fixture: ComponentFixture<ConfirmacionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
