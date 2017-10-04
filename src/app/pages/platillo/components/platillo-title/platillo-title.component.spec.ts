import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloTitleComponent } from './platillo-title.component';

describe('PlatilloTitleComponent', () => {
  let component: PlatilloTitleComponent;
  let fixture: ComponentFixture<PlatilloTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
