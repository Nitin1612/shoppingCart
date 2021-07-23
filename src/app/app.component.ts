import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  bikesInCart = [];
  bikes = [
    { name: "R15 V3", price: 180000 },
    { name: "Duke 200", price: 230000 },
    { name: "Royal Enfield", price: 178000 },
    { name: "Pulsar NS 200", price: 150000 },
    { name: "Gixer", price: 123000 },
    { name: "KTM RC 200", price: 278000 }
  ];
  addToCart(product) {
    const existing = this.bikesInCart.find(({ name }) => product.name === name);
    if (existing) {
      existing.num += 1;
      return;
    }
    this.bikesInCart.push({ ...product, num: 1 });
  }
  removeFromCart(product) {
    this.bikesInCart = this.bikesInCart.filter(
      ({ name }) => name !== product.name
    );
  }
}
