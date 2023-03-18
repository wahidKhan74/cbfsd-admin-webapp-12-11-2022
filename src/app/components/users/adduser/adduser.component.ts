import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  userBool: boolean = true;
  userForm:FormGroup = new FormGroup({});
  loader : boolean = false;
  errResponse: any;


  @Input()
  public userInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor( private modalService: NgbModal,  private fb:FormBuilder, private userService:UsersService,
    private router:Router) { }

  ngOnInit(): void {
    if(this.userInfo) {
      this.initialForm(this.userInfo);
    } else{
      this.initialForm();
    }
   
  }

  initialForm(userObj: any = null) {
    if (userObj === null) {
      this.userForm = this.fb.group({
        fullName: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        userId: [null],
        city: [null],
        state: [null],
        active: [true],
        addedOn: [],
        contact: [],
      });
    } else {
      this.userForm = this.fb.group({
        fullName: [userObj.fullName, Validators.required],
        email: [userObj.email, Validators.required],
        password: [userObj.password, Validators.required],
        userId: [userObj.userId],
        active: [userObj.active],
        city: [userObj.city],
        state: [userObj.state],
        contact: [userObj.contact],
      });
    }
  }

  onSubmit() {
    if(this.userForm.valid) {
      if(this.userForm.get('userId')) {
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
    this.userService.save(this.userForm.getRawValue()).subscribe((response:any)=>{
      console.log(response);
      // this.router.navigateByUrl('/users');
      window.location.href ="/users";
      this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }

  handleUpdate() {
    this.userService.update(this.userForm.getRawValue()).subscribe((response:any)=>{
      console.log(response);
      window.location.href ="/users";
      this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }

  close() {
    this.closeModel.emit();
  }

}
