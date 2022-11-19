import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { ProductsModule } from './components/products/products.module';
import { AuthModule } from './components/auth/auth.module';
import { UsersModule } from './components/users/users.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdersService } from './services/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    ContactusComponent,
    AboutusComponent,
    OrdersComponent,
    SideNavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    AuthModule,
    UsersModule,
    HttpClientModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
