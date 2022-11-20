import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { ProductsComponent } from './products.component';
import { ProductsService } from 'src/app/services/products.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from 'src/app/services/catergories.service';
import { AddcategoryComponent } from './addcategory/addcategory.component';



@NgModule({
  declarations: [
    ProductsComponent,
    AddproductComponent,
    ViewproductComponent,
    DetailsproductComponent,
    CategoriesComponent,
    AddcategoryComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  providers :[ProductsService, CategoriesService]
})
export class ProductsModule { }
