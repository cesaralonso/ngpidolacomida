import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloCreateComponent } from './platillo-create.component';

describe('PlatilloCreateComponent', () => {
  let component: PlatilloCreateComponent;
  let fixture: ComponentFixture<PlatilloCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
