import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloInfoComponent } from './platillo-info.component';

describe('PlatilloInfoComponent', () => {
  let component: PlatilloInfoComponent;
  let fixture: ComponentFixture<PlatilloInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
