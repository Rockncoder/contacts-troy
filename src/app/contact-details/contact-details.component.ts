import {Component, OnInit} from '@angular/core';
import {Location}                 from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import "rxjs/add/operator/switchMap";
import {ContactService} from "../contact.service";
import {Contact} from "../contact";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  id: Number;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        // get the id and save it locally
        this.id = +params['id'];
        return this.contactService.getContact(this.id)
      }).subscribe(contact => this.contact = contact);
  }

  onSubmit() {
    // this method is called if the contact is valid and dirty (no point updating if no changes made)
    this.contactService.getContact(this.id).update(this.contact);
    this.goBack();
  }

  goBack(): void {
    // location works the same as location in the DOM, .back() goes to the previous location
    this.location.back();
  }
}

