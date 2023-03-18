import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public usersList:any[] =[];
  public userInfo:any;

  constructor(private userService: UsersService, private modalService: NgbModal) { }

  ngOnInit(): void {
   this.getAllUser();
  }

  openModal(modelRef:any, userObj = null) {
    this.modalService.open(modelRef, { size: "l" });
    this.userInfo = userObj;
  }

  openViewModal(modelRef:any, userObj = null) {
    this.modalService.open(modelRef, { size: "l" });
    this.userInfo = userObj;
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }

  getAllUser() {
    this.userService.getAll().subscribe((response:any ) => {
      this.usersList = response.content;
      // console.log(response);
    });
  }
  
  deleteUser(userId:any) {
    this.userService.delete(userId).subscribe((response:any ) => {
      this.getAllUser();
    });
  }
}
