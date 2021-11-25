import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {UserGuard} from '../auth/guard/user.guard';

const routes: Routes = [
  {path: 'cart', component: ShoppingCartComponent, canActivate: [UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
