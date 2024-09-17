import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { DeliveryPointComponent } from "./delivery-point/delivery-point.component";
import { PointOfSellComponent } from "./point-of-sell/point-of-sell.component";
import { KitchenComponent } from "./kitchen/kitchen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestaurantComponent, DeliveryPointComponent, PointOfSellComponent, KitchenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contador:number=0;

  aumentarContador() {
    this.contador++;
  }
  title = 'FastFood';
}
