import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboAllComponent } from './combo-all.component';

describe('ComboAllComponent', () => {
  let component: ComboAllComponent;
  let fixture: ComponentFixture<ComboAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
