import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPedidoContainerComponent } from './status-pedido-container.component';

describe('StatusPedidoContainerComponent', () => {
  let component: StatusPedidoContainerComponent;
  let fixture: ComponentFixture<StatusPedidoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPedidoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPedidoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
