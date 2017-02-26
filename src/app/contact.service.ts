import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable()
export class ContactService {

  contacts: Contact[] = [
    {name: "Abel", 'lastName': "Apple", id: 1},
    {name: "Ben", lastName: "Banana", id: 2},
    {name: "Chris", lastName: "Cucumber", id: 3},
    {name: "Denise", lastName: "Durian", id: 4},
    {name: "Eric", lastName: "Eggplant", id: 5},
    {name: "Frank", lastName: "Franks", id: 6}
    ];


  getContacts(): Promise<Contact[]>{
    return Promise.resolve(this.contacts);
  }

  getContact(id: Number): Promise<Contact> {
    return this.getContacts().then(contacts => contacts.find(contact => contact.id === id));
  }

  constructor() {
  }
}
