import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts = [
    {name: "Abel", lastName: "Apple"},
    {name: "Ben", lastName: "Banana"},
    {name: "Chris", lastName: "Cucumber"},
    {name: "Denise", lastName: "Durian"},
    {name: "Eric", lastName: "Eggplant"}];

  constructor() {
  }

  ngOnInit() {
  }
}
