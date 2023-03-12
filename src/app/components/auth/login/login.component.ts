import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signinForm:FormGroup;
  public errResponse:string ="";

  constructor(private authService: AuthService, private router:Router) {
    this.signinForm = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password':  new FormControl(null,[Validators.required,Validators.email])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.signinForm.valid) {
      this.authService.adminLogin(this.signinForm.getRawValue()).subscribe((response:any)=>{
        if(response.status ==="Success") {
          localStorage.setItem('user', response.data);
          localStorage.setItem('status', 'loggedIn');
          this.router.navigateByUrl('/products');
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
