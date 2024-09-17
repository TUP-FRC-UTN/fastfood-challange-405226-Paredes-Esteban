import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PointOfSellComponent } from "../point-of-sell/point-of-sell.component";
import { KitchenComponent } from "../kitchen/kitchen.component";
import { DeliveryPointComponent } from "../delivery-point/delivery-point.component";
import { Pedido } from '../classes/restaurantClasses';
import { RestaurantService } from '../services/restaurant.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PointOfSellComponent, KitchenComponent, DeliveryPointComponent, JsonPipe],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})

export class RestaurantComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['entradaP']){
      this.cargarPedidosListos();
      this.cargarPedidosNoListos();
    }
  }
  pedidosListos:Pedido[] = [];
  pedidosNoListos:Pedido[]=[];
  pedidosService = inject(RestaurantService);
  @Output() salidaP = new EventEmitter<number>();
  @Input() entradaP = 0;
  contador:number=0;

  cargarPedidosListos(){
    this.pedidosListos=this.pedidosService.getCompletedOrders();
  }

  cargarPedidosNoListos(){
    this.pedidosNoListos = this.pedidosService.getUncompletedOrders();
  }
  
  entregarPedido(index:number){
    this.pedidosService.removeOrder(index);
    this.cargarPedidosListos();
  }
}
