import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
 
  { path: 'users', component: UserListComponent },
  { path: 'add-user', component: UserFormComponent },
  { path: 'user/:id', component: UserDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
