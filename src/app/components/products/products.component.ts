import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList:any[] =[];
  public productInfo:any;

  constructor(private productsService:ProductsService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe((response:any)=> {
      // console.log(response);
      this.productList = response;
    })
  }

  openModal(modelRef:any, productObj = null) {
    this.modalService.open(modelRef, { size: "xl" });
    this.productInfo = productObj;
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }
}
