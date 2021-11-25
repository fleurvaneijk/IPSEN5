import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/models/user.model';
import {AuthService} from '../shared/services/auth.service';
import {CartService} from "../../cart/service/cart.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  curUser: User;
  counter = 0;

  constructor(private router: Router, private authService: AuthService, private cart: CartService) {
    this.setUpdAthUser();
  }

  setUpdAthUser() {
    this.authService.getCurUser().subscribe((user: User) => {
      this.curUser = user;
    });
  }

  ngOnInit() {

  }

  logOut() {
    this.authService.logOut();
    this.cart.deleteCookie();
  }

  navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    if(this.counter/2 == 0) {
      nav.classList.toggle('nav-inactive');
      this.counter++;
    }
  }
}
