import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RegisterGuard} from './guard/register.guard';
import {UserManagementComponent} from '../users/dialog/user-management/user-management.component';
import {InviteLinkComponent} from '../invite/invite-link/invite-link.component';
import {LoginGuard} from './guard/login.guard';
import {AdminGuard} from './guard/admin.guard';

const authRoutes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'register/:part1/:part2/:part3', component: RegisterComponent, canActivate: [RegisterGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [RegisterGuard]},
  {path: 'auth/action', component: UserManagementComponent, canActivate: [AdminGuard]},
  {path: 'invites', component: InviteLinkComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}


