import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcocinandoseComponent } from './listcocinandose.component';

describe('ListcocinandoseComponent', () => {
  let component: ListcocinandoseComponent;
  let fixture: ComponentFixture<ListcocinandoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcocinandoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcocinandoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
