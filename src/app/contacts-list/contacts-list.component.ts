import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    // this.contacts = this.contactService.getContacts()
    this.contactService.getContacts().then(contacts => this.contacts = contacts);

    // this.contactService.getContacts().then(function (contacts) {
    //   this.contacts = contacts;
    // });
  }
}
