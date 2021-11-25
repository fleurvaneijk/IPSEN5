import {User as FirebaseUser} from 'firebase';
import {OrderHistoryRecord} from './order-history.model';

export class User {
  uid: string;
  docId: string;
  email: string;
  role: string;
  fullName: string;
  licenses: Array<string>;
  orderHistory: Array<OrderHistoryRecord>;

  constructor(fireBaseUser: FirebaseUser, extraInfo, docRef: string) {
    this.uid = extraInfo.uid || '';
    this.docId = docRef || '' ;
    this.role = extraInfo.role || '';
    this.licenses = extraInfo.licenses || '';
    this.email = fireBaseUser.providerData[0].email || '';
    this.orderHistory = extraInfo.orderHistory || '';
    this.fullName = fireBaseUser.providerData[0].displayName || '';
  }
}
