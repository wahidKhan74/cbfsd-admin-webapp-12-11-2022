import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/catergories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categoriesList:any[] =[];

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe( (response:any)=> {
      this.categoriesList = response;
    })
  }

}
