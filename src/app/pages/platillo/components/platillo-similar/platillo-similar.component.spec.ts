import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloSimilarComponent } from './platillo-similar.component';

describe('PlatilloSimilarComponent', () => {
  let component: PlatilloSimilarComponent;
  let fixture: ComponentFixture<PlatilloSimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloSimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
