import {AngularFirestore} from '@angular/fire/firestore';
import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Song} from '../model/song';
import {User} from '../../core/shared/models/user.model';
import {AuthService} from '../../core/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  songs: Song[] = [];
  user: User;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, private auth: AuthService) {
  }

  public getSongsFromFirebase() {
    this.songs = [];
    this.afs.firestore.collection('songs').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        this.renderSong(doc);
      });
    });
  }

  private renderSong(doc) {
    this.storage.ref(doc.data().image).getDownloadURL().subscribe(imgUrl => {
      this.storage.ref(doc.data().preview).getDownloadURL().subscribe(previewAudioUrl => {

        this.auth.getCurUser().subscribe((data: User) => {
          this.user = data;
        });

        if (this.user.role === 'Vip') {
          this.songs.push(new Song(doc.id, doc.data().title, doc.data().artist, null, previewAudioUrl, imgUrl, null, doc.data().genre,
            doc.data().duration, 0, doc.data().tags, doc.data().speed, doc.data().key, doc.data().extraInfo));
        } else {
          this.songs.push(new Song(doc.id, doc.data().title, doc.data().artist, null, previewAudioUrl, imgUrl, null, doc.data().genre,
            doc.data().duration, doc.data().price, doc.data().tags, doc.data().speed, doc.data().key, doc.data().extraInfo));
        }
      });
    });
  }
}
