import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MatModule} from './mat.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from '../auth/auth-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {UserService} from './shared/services/user.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    MatModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [UserService]
})
export class CoreModule {
  constructor() {
  }
}
