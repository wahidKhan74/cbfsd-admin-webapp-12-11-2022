import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddproductComponent } from './components/products/addproduct/addproduct.component';
import { CategoriesComponent } from './components/products/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewproductComponent } from './components/products/viewproduct/viewproduct.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { UsersComponent } from './components/users/users.component';
import { ViewuserComponent } from './components/users/viewuser/viewuser.component';

const routes: Routes = [
  { path :'' , component: DashboardComponent },
  { path :'dashboard' , component: DashboardComponent },
  { path :'contactus' , component: ContactusComponent },
  { path :'aboutus' , component: AboutusComponent },
  { path :'orders' , component: OrdersComponent },
  { path :'auth' , children :[
      {path: 'login' , component: LoginComponent},
      {path: 'register' , component: RegisterComponent},
      {path: 'forget-password' , component: ForgetPasswordComponent},
  ]},
  { path :'users' , children :[
    {path: '' , component: UsersComponent},
    {path: 'create' , component: AdduserComponent},
    {path: 'update' , component: AdduserComponent},
    {path: 'view' , component: ViewuserComponent},
  ]},
  { path :'products' , children :[
    {path: '' , component: ProductsComponent},
    {path: 'create' , component: AddproductComponent},
    {path: 'update' , component: AddproductComponent},
    {path: 'view' , component: ViewproductComponent},
    {path: 'categories' , component: CategoriesComponent},
  ]},
  { path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
