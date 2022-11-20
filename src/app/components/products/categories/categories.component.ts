import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/services/catergories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categoriesList:any[] =[];
  public categoryInfo:any;


  constructor(private categoriesService:CategoriesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe( (response:any)=> {
      this.categoriesList = response;
    })
  }

  openProductCategoryDialog(modelRef:any, productCategoryObj = null) {
    console.log(productCategoryObj);    
    this.modalService.open(modelRef);
    this.categoryInfo = productCategoryObj;
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }
}
