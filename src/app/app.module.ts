import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list.component";
import { CartComponent } from "./cart.component";
import { ProductComponent } from "./product.component";
import { CartProductComponent } from "./cart.product.component";

import { PaymeComponent } from "./payme/payme.component";

@NgModule({
  declarations: [
    AppComponent,
    PaymeComponent,
    ListComponent,
    ProductComponent,
    CartComponent,
    CartProductComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
