import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/services/catergories.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  prodorderBool: boolean = true;
  orderForm:FormGroup = new FormGroup({});
  loader : boolean = false;
  tempFile: any;
  errResponse:any;

  @Input()
  public orderInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor( private modalService: NgbModal,  private fb:FormBuilder, private orderService:OrdersService) { }

  ngOnInit(): void {
    if(this.orderInfo) {
      this.initialForm(this.orderInfo);
    } else{
      this.initialForm();
    }
   
  }

  initialForm(orderObj: any = null) {
    if (orderObj === null) {
      this.orderForm = this.fb.group({
        address: ["", Validators.required],
        contact: ["", Validators.required],
        email:  ["", Validators.required],
        itemsSubTotal:  ["", Validators.required],
        name:  ["", Validators.required],
        orderDate:  [new Date()],
        orderId:  [],
        orderStatus: ["New", Validators.required],
        paymentMethod:  [2, Validators.required],
        paymentMethodTitle: ["Credit card", Validators.required],
        paymentStatus:[1, Validators.required],
        paymentStatusTitle: ["successs",Validators.required],
        shipmentCharges:[20, Validators.required],
        totalAmount:[],
        totalItems:[],
        userId:[]
      });
    } else {
      this.orderForm = this.fb.group({
        address: [orderObj.address, Validators.required],
        contact: [orderObj.contact, Validators.required],
        email:  [orderObj.email, Validators.required],
        itemsSubTotal:  [orderObj.itemsSubTotal, Validators.required],
        name:  [orderObj.name, Validators.required],
        orderDate:  [orderObj.orderDate],
        orderId:  [orderObj.orderId],
        orderStatus: [orderObj.orderStatus, Validators.required],
        paymentMethod:  [orderObj.paymentMethod, Validators.required],
        paymentMethodTitle: [orderObj.paymentMethodTitle, Validators.required],
        paymentStatus:[orderObj.paymentStatus, Validators.required],
        paymentStatusTitle: [orderObj.paymentStatusTitle,Validators.required],
        shipmentCharges:[orderObj.shipmentCharges, Validators.required],
        totalAmount:[orderObj.totalAmount],
        totalItems:[orderObj.totalItems],
        userId:[orderObj.userId]
      });
    }
  }

  onSubmit() {
    if(this.orderForm.valid) {
      if(this.orderForm.get('userId')) {
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
    this.orderService.save(this.orderForm.getRawValue()).subscribe((response:any)=>{
      console.log(response);
      window.location.href ="/orders";
      this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }

  handleUpdate() {
    this.orderService.update(this.orderForm.getRawValue()).subscribe((response:any)=>{
      console.log(response);
      window.location.href ="/orders";
      this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }


  checkFileType(event: any) {
    this.tempFile = event.target.files[0];
    if (
      this.tempFile.type == "image/png" ||
      this.tempFile.type == "image/jpeg" ||
      this.tempFile.type == "image/jpg"
    ) {
      // console.log("File Ok");
    } else {
      // console.log("File not Ok");
      this.tempFile = null;
      // this.toast.show("Only .png/.jpeg/.jpg file format accepted!!");
    }
  }

  close() {
    this.closeModel.emit();
  }
}
