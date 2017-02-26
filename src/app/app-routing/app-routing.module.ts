import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactsListComponent} from '../contacts-list/contacts-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactsListComponent}
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
