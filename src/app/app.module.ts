import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';

import {ContactService} from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
