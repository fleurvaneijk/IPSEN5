import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatModule} from './core/mat.module';
import {AuthModule} from './auth/auth.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {BrowserModule} from '@angular/platform-browser';
import {CartModule} from './cart/cart.module';
import {CookieService} from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileDropModule} from 'ngx-file-drop';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {AngularFireModule} from '@angular/fire';
import {MatInputModule} from '@angular/material';
import {ConfirmationDialogComponent} from './core/shared/confirmation-dialog/confirmation-dialog.component';
import {UserMusicModule} from './catalog/catalog.module';
import {UserModule} from './users/user.module';
import {AdminLinksModule} from './invite/admin-links.module';
import {MusicModule} from './music/music.module';
import {ProfileModule} from './profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    MatModule,
    CoreModule,
    AuthModule,
    UserModule,
    CartModule,
    FormsModule,
    MusicModule,
    FormsModule,
    RouterModule,
    CommonModule,
    BrowserModule,
    ProfileModule,
    MatInputModule,
    FileDropModule,
    UserMusicModule,
    AdminLinksModule,
    ReactiveFormsModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    ToastrModule.forRoot({timeOut: 2000}),
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
