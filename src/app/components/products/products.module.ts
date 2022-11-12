import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    ProductsComponent,
    AddproductComponent,
    ViewproductComponent,
    DetailsproductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
