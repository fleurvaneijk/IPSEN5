import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../service/cart.service';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';
import {Song} from '../../catalog/model/song';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() song: Song;

  constructor(private cartService: CartService, private cartComponent: ShoppingCartComponent) {
  }

  ngOnInit() {
    this.cartComponent.makeTotalPrice();
  }

  deleteItem() {
    this.cartService.removeFromCart(this.song);
    this.cartComponent.makeTotalPrice();
    this.cartComponent.ngOnInit();
  }

}
