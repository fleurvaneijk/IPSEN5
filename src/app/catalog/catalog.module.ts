import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {MatModule} from '../core/mat.module';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {MatProgressSpinnerModule} from '@angular/material';
import {SongComponent} from './catalog-list-song/song.component';
import {SongDetailsComponent} from './dialog/song-details/song-details.component';
import {CatalogComponent} from './catalog-list/catalog.component';
import {CatalogService} from './service/catalog.service';
import {CatalogRoutingModule} from './catalog-routing.module';


@NgModule({
  declarations: [
    SongComponent,
    CatalogComponent,
    SongDetailsComponent,
  ],
  imports: [
    MatModule,
    FormsModule,
    BrowserModule,
    NgxAudioPlayerModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    SongComponent,
    CatalogComponent,
    SongDetailsComponent,
    CatalogRoutingModule
  ],
  providers: [
    CatalogService,
    AngularFirestore,
    AngularFireStorage
  ]
})
export class UserMusicModule {
}
