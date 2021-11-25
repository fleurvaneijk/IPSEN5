import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {FormsModule} from '@angular/forms';
import {MatModule} from '../core/mat.module';
import {CartItemComponent} from './cart-item/cart-item.component';
import {CartRoutingModule} from './cart-routing.module';
import {CartService} from './service/cart.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {PaymentService} from './service/payment.service';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatModule,
    CartRoutingModule,
  ],
  exports: [
    ShoppingCartComponent,
    CartItemComponent,
  ],
  providers: [
    CartService,
    PaymentService,
    AngularFireDatabase,
    AngularFireAuth
  ]
})
export class CartModule {
}
