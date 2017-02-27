import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[];

  items: FirebaseListObservable<any[]>;

  constructor(private contactService: ContactService,
              private af: AngularFire) {
  }

  ngOnInit() {
    this.contactService.getContacts().then(contacts => this.contacts = contacts);

    this.items = this.af.database.list('/contacts');
  }
}
