import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Pedido } from '../classes/restaurantClasses';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['entradaP']){
      this.recibirOrdenes();
    }
  }

  orderService = inject(RestaurantService);
  ordersToDeliver:Pedido[] = [];
  @Output() salidaP = new EventEmitter<number>();
  @Input() entradaP = 0;
  contador:number=0;

  recibirOrdenes(){
    this.ordersToDeliver=this.orderService.getCompletedOrders();
  }

  entregarOrden(index:number){
    this.orderService.removeOrder(index);
    this.recibirOrdenes();
  }
}
