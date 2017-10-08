import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPedidoInfoComponent } from './status-pedido-info.component';

describe('StatusPedidoInfoComponent', () => {
  let component: StatusPedidoInfoComponent;
  let fixture: ComponentFixture<StatusPedidoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPedidoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPedidoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
