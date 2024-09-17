import { Injectable } from '@angular/core';
import { Pedido } from '../classes/restaurantClasses'; 

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor() { }
  private orderLst : Pedido[] = [];

  addOrder(order:Pedido){
    this.orderLst.push(order);
  }

  getUncompletedOrders(){
    return this.orderLst.filter(obj => obj.done === false);
  }

  getCompletedOrders(){
    return this.orderLst.filter(obj => obj.done === true);
  }

  updateOrder(order:Pedido){
    this.orderLst.splice(this.orderLst.indexOf(order),1);
    this.orderLst.push(order);
  }

  removeOrder(index:number){
    this.orderLst.splice(index,1);
  }
}
