import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloAllComponent } from './platillo-all.component';

describe('PlatilloAllComponent', () => {
  let component: PlatilloAllComponent;
  let fixture: ComponentFixture<PlatilloAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
