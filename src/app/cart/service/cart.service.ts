import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ToastrService} from 'ngx-toastr';
import {Song} from '../../catalog/model/song';


@Injectable()
export class CartService {

  public cart: Song[] = [];

  constructor(private cookieService: CookieService, private toast: ToastrService) {
  }

  // ---------- ADD TO CART --------------- //
  public addToCart(song: Song) {
    if (this.checkSongInCart(song)) {
      return;
    }
    this.addToCookie(song);
    this.cart.push(song);
    this.toast.success('Song added to cart.', 'Succes');
  }

  private checkSongInCart(song: Song) {
    for (let i = 0; i < this.retrieveFromCookie().length; i++) {
      if (this.retrieveFromCookie()[i].id === song.id) {
        this.toast.error('You already have this song in your cart.', 'Uh Oh!');
        return true;
      }
    }
  }

  private addToCookie(item) {
    const cart = this.retrieveFromCookie();
    cart.push(item);
    this.storeCartToCookie(cart);
  }

  // ---------- GET FROM CART --------------- //
  public checkCartWithCookie() {
    if (this.retrieveFromCookie().length < 1) {
      return;
    }
    if (this.cart.length === this.retrieveFromCookie().length) {
      return;
    }
    this.cart = [];
    for (const song of this.retrieveFromCookie()) {
      this.cart.push(song);
    }
  }

  private retrieveFromCookie(): Array<Song> {
    if (this.cookieService.get('cart') === '') {
      return [];
    } else {
      return JSON.parse(this.cookieService.get('cart'));
    }
  }

  // ---------- REMOVE FROM CART --------------- //
  public removeFromCart(song: Song) {
    this.checkCartWithCookie();
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id === song.id) {
        this.cart.splice(i, 1);
      }
    }
    this.storeCartToCookie(this.cart);
  }

  // ---------- STORE CART --------------- //
  private storeCartToCookie(cart) {
    this.storeInCookie('cart', JSON.stringify(cart));
  }

  private storeInCookie(key: string, any: any) {
    this.cookieService.set(key, any);
  }

  // ---------- DELETE CART --------------- //
  public deleteCookie() {
    this.cookieService.delete('cart');
  }
}
