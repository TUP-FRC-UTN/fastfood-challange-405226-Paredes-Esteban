import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pedido } from '../classes/restaurantClasses';
import { RestaurantService } from '../services/restaurant.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['entrada']){
      this.contador=this.entrada;
      console.log('POS RECIBIDO 1');
    }
    console.log('POS CHANCHA');
  }
  order:Pedido = new Pedido();
  pedidoService= inject(RestaurantService);
  @Output() salidaP = new EventEmitter<number>();
  @Input() entrada:number = 0;
  contador:number=0;

  ordenarPedido(){
    this.order.done=false;
    this.pedidoService.addOrder(this.order);
    this.order= new Pedido();
    this.salidaP.emit(this.contador);
  }
}