import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ListusersComponent } from './listusers/listusers.component';



@NgModule({
  declarations: [
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ListusersComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
