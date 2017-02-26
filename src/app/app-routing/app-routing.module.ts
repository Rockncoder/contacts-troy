import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactsListComponent} from '../contacts-list/contacts-list.component';
import {AboutComponent} from '../about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactsListComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
