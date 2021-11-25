import {BaseModel, instanceOfModel} from '../models/base.model';
import {AngularFirestore} from '@angular/fire/firestore';


export abstract class BaseService<T extends BaseModel> {

  protected path;

  protected constructor(protected firestore: AngularFirestore, path) {
    this.path = path;
  }

  public add(entity: T) {
    delete entity.uid;
    delete entity.docId;
    return this.firestore.collection(this.path).add(entity);
  }

  public delete(id: string | T) {
   return this.firestore.doc(this.path + '/' + id).delete();
  }

  public get(id: string) {
    return this.firestore.doc(this.path + '/' + id).get();
  }

  public getAll() {
    return this.firestore.collection(this.path).snapshotChanges();
  }

  public update(entity: T, id?: string) {
    const newId = id ? id : entity.uid;
    delete entity.uid;
    delete entity.docId;
    return this.firestore.doc(this.path + '/' + id).update(entity);
  }
}
