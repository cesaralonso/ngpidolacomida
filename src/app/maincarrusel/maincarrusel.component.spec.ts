import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincarruselComponent } from './maincarrusel.component';

describe('MaincarruselComponent', () => {
  let component: MaincarruselComponent;
  let fixture: ComponentFixture<MaincarruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincarruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
