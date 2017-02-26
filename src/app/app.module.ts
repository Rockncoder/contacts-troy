import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
