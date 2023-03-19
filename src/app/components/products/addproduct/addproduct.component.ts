import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/services/catergories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({});
  productModel: Products | undefined;
  selectedImageIdx: number = 0;
  thumbnailImageIdx: number = 0;
  tempImageFiles: any[] = [];
  updation: boolean = false;
  loader: boolean = false;
  categoryList:any[] =[];
  errResponse:any;

  @Input()
  public productInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal,  private fb:FormBuilder,private categoriesService:CategoriesService,
    private productService:ProductsService) { }

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe( (response:any)=> {
      this.categoryList = response;
    })

    if(this.productInfo) {
      this.initialiseProductModal(this.productInfo);
    }else{
      this.initialiseProductModal();
    }
  }

  initialiseProductModal(productObj: any = null) {
    if (productObj == null) {
      this.updation = false;
      this.productForm = this.fb.group({
        productId: [],
        productTitle: [null],
        productCode: [null],
        price: [null],
        images: this.fb.array([]),
        thumbnailImage: [null],
        productDescription: [null],
        productCategory: [null],
        active: [true],
        addedOn: [new Date()],
        rating: [0]
      });
    } else {
      this.updation = true;
      this.productForm = this.fb.group({
        productId: [productObj.productId],
        productTitle: [productObj.productTitle],
        productCode: [productObj.productCode],
        price: [productObj.price],
        images: [productObj.images],
        thumbnailImage: [productObj.thumbnailImage],
        productDescription: [productObj.productDescription],
        productCategory: [productObj.productCategory],
        active: [productObj.active],
        addedOn: [productObj.addedOn],
        rating: [productObj.rating]
      });
      this.onSelectOption(productObj.productCategory);
      this.tempImageFiles = productObj.images || [];
    }
  }

  onSubmit() {
    if(this.productForm.valid) {
      if(this.productForm.get('userId')) {
        this.handleUpdate();
      } else{
        this.handleCreate();
      }
    } else{
      this.errResponse = "Enable to submit form, Invalid form data";
      console.log("Invalid Form");
    }
  }

  handleCreate() {
    this.productService.save(this.productForm.getRawValue()).subscribe((response:any)=>{
      console.log(response);
      window.location.href ="/products";
      this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }

  handleUpdate() {
    this.productService.update(this.productForm.getRawValue()).subscribe((response:any)=>{
      console.log(response);
      window.location.href ="/products";
      this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }


  onSelectOption(category: any) {
    this.productForm.patchValue({
      category: this.categoryList.find(x => x.categoryId === category.categoryId)
    })
  }

  close() {
    this.closeModel.emit();
  }

  // open image
  openImage(url: string) {
    window.open(url, "_blank")
  }

  removeImage(idx: number) {
    this.tempImageFiles.splice(idx, 1);
  }

  changeThumbnailImageIdx(idx: number) {
    this.productForm.patchValue({
      thumbnailImage: idx
    })
  }

  checkImageFileType(event: any) {
    let fileList: File[] = Object.assign([], event.target.files);
    fileList.forEach((file: any, idx: number) => {
      if (
        file.type == "image/png" ||
        file.type == "image/jpeg" ||
        file.type == "image/jpg"
      ) {
        this.tempImageFiles.push(file);
      } else {
        // this.toast.warning("Only .png/.jpeg/.jpg file format accepted!!", file.name + " will not accepted.");
      }
    });
  }

  compareByCategoryId(category1: Category, category2: Category) {
    return category1 && category2 && category1.categoryId === category2.categoryId;
  }
}



export interface Products {
  productId?: string;
  productTitle?: string;
  productCode?: string;
  productDescription?: string;
  price?: number;
  productCategory?: Category;
  images?: string[];
  thumbnailImage?: number;
  active?: boolean;
  addedOn?: Date;
  rating?: number;
}

export interface Category {
  categoryId?: string;
  categoryName?: string;
  categoryDescription?: string;
  categoryImageUrl?: string;
  createdOn?: Date;
  active?: boolean;
}