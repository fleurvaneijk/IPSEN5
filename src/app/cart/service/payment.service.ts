import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class PaymentService {

  userId: string;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      if (auth) { this.userId = auth.uid; }
    });
  }

  // This will save the token to firebase, triggering the cloud function
  processPayment(token: any, amount: number) {
    const payment = { token, amount };
    return this.db.collection('/payments').add(payment);
  }
}
