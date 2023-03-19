import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public ordersList:any[]= [];
  public orderInfo:any;

  orderStatusIdx: number = 0;
  orderStatus: { name: string; value: number }[] = [
    { name: 'Placed', value: 0 },
    { name: 'Accepted', value: 1 },
    { name: 'Delivered', value: 2 },
    { name: 'Cancelled', value: 3 },
  ];
  viewOrderBool: boolean = false;
  viewOrderIdx: number | undefined;
  orderModel: any;

  constructor(private ordersService:OrdersService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ordersService.getAll().subscribe((orders:any)=> {
      console.log(orders);
      this.ordersList = orders.content;
    })
  }

  
  changeOrderStatus(orderStatusIdx: number) {
    this.orderStatusIdx = orderStatusIdx;
  }

  openViewModal(orderModel: any, viewOrderIdx: number) {
    console.log(orderModel);    
    this.viewOrderBool = true;
    this.viewOrderIdx = viewOrderIdx;
    this.orderModel = orderModel;
  }

  closeViewModal() {
    delete this.viewOrderIdx;
    delete this.orderModel;
    this.viewOrderBool = false;
  }


  openOrderDialog(modelRef:any, orderObj = null) {
    console.log(orderObj);    
    this.modalService.open(modelRef,{ size: "xl" });
    this.orderInfo = orderObj;
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }

}
