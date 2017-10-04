import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloContainerComponent } from './platillo-container.component';

describe('PlatilloContainerComponent', () => {
  let component: PlatilloContainerComponent;
  let fixture: ComponentFixture<PlatilloContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
