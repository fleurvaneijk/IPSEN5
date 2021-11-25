export interface BaseModel {
  uid: string;
  docId: string;
}

export function instanceOfModel(object: any): object is BaseModel {
  return 'uid' in object;
}
