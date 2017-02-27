import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: FirebaseListObservable<Contact[]>;

  constructor(private contactService: ContactService,
              private af: AngularFire) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
}
