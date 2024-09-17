import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Pedido } from '../classes/restaurantClasses';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['entradaP']){
      this.traerPedidos();
      console.log('KITCHEN RECIBIDO 1');
    }
    console.log('KITCHEN CHANCHA');
  }
  pedidoService = inject(RestaurantService);
  pendingOrders: Pedido[] = [];
  currentOrder:Pedido | undefined = undefined;
  ableToStart:boolean=true;
  @Output() salidaP = new EventEmitter<number>();
  @Input() entradaP:number=0;
  contador:number=0;

  traerPedidos(){
    this.pendingOrders=this.pedidoService.getUncompletedOrders();   
  }

  enviarPedido(){
    if(this.currentOrder!=undefined){
      this.currentOrder.done=true;
      this.pedidoService.updateOrder(this.currentOrder);
      this.ableToStart=true
      this.currentOrder=undefined;
      this.salidaP.emit(this.contador);
    }
  }

  comenzarCoccion(index:number){
    this.ableToStart=false;
    this.currentOrder= this.pendingOrders.at(index);
    this.pendingOrders.splice(index,1);
  }

  showOrder(order:Pedido):string{
    return "("+order.number+") - " + order.description;
  }
}
