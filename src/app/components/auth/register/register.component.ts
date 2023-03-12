import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm:FormGroup;
  public errResponse:string ="";


  constructor(private authService: AuthService, private router:Router) {
    this.signupForm = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password':  new FormControl(null,[Validators.required]),
      'fullName': new FormControl(null,[Validators.required,]),
      'loginType': new FormControl(1,[Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.signupForm.valid) {
      this.authService.adminRegister(this.signupForm.getRawValue()).subscribe((response:any)=>{
        if(response) {
          this.router.navigateByUrl('/auth/login');
        }
      },error =>{
        this.errResponse = error.error.message;
      })
    } else{
      this.errResponse = "Enable to submit form, Invalid form data";
      console.log("Invalid Form");
    }
    
  }


}
