import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {FirebaseListObservable, AngularFire, FirebaseObjectObservable} from "angularfire2";
import {Observable} from 'rxjs';

@Injectable()
export class ContactService {

  items: FirebaseListObservable<Contact[]>;
  contacts: FirebaseListObservable<Contact[]>;

  constructor(private af: AngularFire) {
    this.items = af.database.list('/contacts');
  }

  getItems() {
    return this.items;
  }

  getContacts(): FirebaseListObservable<Contact[]> {
    return this.items;
  }

  getContact(id: Number): FirebaseObjectObservable<any> {
    let myObj = this.af.database.object('/contacts/' + id);
    return myObj;
  }
}
