import {Component, OnInit} from '@angular/core';
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
  submitted = false;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.contactService.getContact(+params['id']))
      .subscribe(contact => this.contact = contact);
  }

  onSubmit() {
    this.submitted = true;
  }
}

