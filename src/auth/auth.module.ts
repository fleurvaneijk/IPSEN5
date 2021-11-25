import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatModule} from '../core/mat.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {AuthRoutingModule} from './auth-routing.module';
import {RouterModule} from '@angular/router';
import {AuthService} from '../core/shared/services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {RegisterService} from './service/register.service';
import {HttpClientModule} from '@angular/common/http';
import {RegisterDialogService} from './service/register-dialog.service';
import {RegisterErrorDialogComponent} from './dialog/register-error-dialog.component';
import {UserManagementModule} from '../users/dialog/user-management/user-management.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterErrorDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule,
    BrowserModule,
    UserManagementModule,
    RouterModule,
    FormsModule,
    MatModule,
  ],
  exports: [
    LoginComponent,
    AuthRoutingModule,
    RegisterComponent,
    RegisterErrorDialogComponent
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    RegisterService,
    RegisterDialogService
  ],
  entryComponents: [
    RegisterErrorDialogComponent
  ]
})
export class AuthModule {}

