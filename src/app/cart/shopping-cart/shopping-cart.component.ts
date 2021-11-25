import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CartService} from '../service/cart.service';
import {PaymentService} from '../service/payment.service';
import {environment} from '../../../environments/environment';
import {formatCurrency} from '@angular/common';
import {CatalogService} from '../../catalog/service/catalog.service';
import {OrderHistoryService} from '../../profile/service/order-history.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  handler: any;
  totalPrice = 0;

  constructor(private cartService: CartService, private catalogService: CatalogService, private paymentSvc: PaymentService,
              private orderHistoryService: OrderHistoryService) {
  }

  ngOnInit() {
    this.cartService.checkCartWithCookie();

    // @ts-ignore
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/2-don-diablo-sephira-giska.jpg',
      color: 'black',
      locale: 'auto',
      token: token => {
        this.paymentSvc.processPayment(token, (this.totalPrice * 100));
        for (const song of this.cartService.cart) {
          this.orderHistoryService.saveOrder(song.id);
        }
        this.cartService.deleteCookie();
        window.location.reload();
      }
    });
  }

  public makeTotalPrice() {
    this.totalPrice = 0;
    for (const product of this.cartService.cart) {
      this.totalPrice += parseFloat(product.price.toString());
    }
  }

  handlePayment() {
    this.handler.open({
      name: 'Don Diablo Music Library',
      description: 'Payment for shopping cart',
      currency: 'usd',
      amount: (this.totalPrice * 100)
    });
  }

  // Close on navigate
  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }
}
