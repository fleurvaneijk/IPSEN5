import {User} from '../models/user.model';
import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<User> {

  private user1: User;
  private user2: User;

  private _roles: string[] = ['User', 'Vip', 'Admin'];


  constructor(firestore: AngularFirestore) {
    super(firestore, 'users');
  }

  public getDummyUsers(): User[] {

    this.user1 = {docId: '214123', uid: '1', role: 'User', fullName: 'kees', email: 'testemail1', licenses: ['Hi'], orderHistory: []};
    this.user2 = {docId: '333333', uid: '2', role: 'User', fullName: 'kees', email: 'testemail1', licenses: ['Hi'], orderHistory: []};


    return [this.user1, this.user2];
  }

  public getDummyUser(): User {
    return {docId: '333333', uid: '3', role: 'User', fullName: 'kees', email: 'testemail1', licenses: [], orderHistory: []};
  }

  public getRoles(): string[] {
    return this._roles;
  }

  public getRole(i): string {
    return this._roles[i];
  }

  unsetProperties(user: User) {
    delete user.uid;
    delete user.docId;
    return user;
  }

  setRoleVip(user: User) {
    user.role = this.getRole(1);
    return user;
  }
}

