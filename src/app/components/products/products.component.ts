import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList:any[] =[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe((response:any)=> {
      // console.log(response);
      this.productList = response;
    })
  }

}
