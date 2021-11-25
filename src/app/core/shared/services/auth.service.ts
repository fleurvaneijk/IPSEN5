import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {auth, User as FirebaseUser} from 'firebase';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore/firestore';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private curUserOb = new BehaviorSubject(null);

  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
    this.afAuth.authState.subscribe((user: FirebaseUser) => {
      if (user) {
        this.firestore.collection(this.firestore.collection('users').ref, ref => {
          let query: firebase.firestore.Query = ref;
          query = query.where('uid', '==', user.uid);
          return query;
        }).get().forEach((snapshot) => {
          if (!snapshot.empty) {
            this.curUserOb.next(new User(user, snapshot.docs[0].data(), snapshot.docs[0].id));
          } else {
            this.curUserOb.next(null);
          }
        });
      } else {
        this.curUserOb.next(null);
      }
    });
  }

  async doLogin(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }


  correctLogin() {
    this.router.navigate(['catalog']);
  }

  testPersistance() {
    return this.afAuth.auth.currentUser;
  }

  async doLoginGoogle() {
    const provicder = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provicder);
    this.router.navigate(['catalog']);
  }

  async logOut() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    const user = this.curUserOb.getValue();
    return user !== null;
  }

  getCurUser(): BehaviorSubject<User> {
    return this.curUserOb;
  }

  getAuth() {
    return this.afAuth.auth;
  }

  resetPasswordInit(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
}
