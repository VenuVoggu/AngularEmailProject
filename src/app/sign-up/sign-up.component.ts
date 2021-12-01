import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { UserModel } from '../shared/user.model';
//import { sign } from 'crypto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public data={
    UserName : "",
    PhoneNumber : "",
    CreateEmail:"",
    ConfirmEmail : "",
    CreatePassword : "",
    ConfirmPassword : "",
  }
  
  valid = {
    UserName: true,
    PhoneNumber: true,
    Email: true,
    CreateEmail: true,
    ConfirmEmail: true,
    CreatePassword: true,
    ConfirmPassword: true,
  }

  public registerObj = new UserModel();
  constructor(private http: HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }

  //validation part
  validate(type: string): void {
    const usernamePattern = /^[a-zA-Z]+$/
    const emailPattern = /\S+@\S+\.\S+/;
    const mobilePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (type === 'UserName') {
      if (this.data.UserName.length < 4 || this.data.UserName.length >= 10) {
        this.valid.UserName = false;
      } else {
        this.valid.UserName = usernamePattern.test(this.data.UserName);
      }
    } else if (type === "PhoneNumber") {
      if (this.data.PhoneNumber.length < 10 || this.data.PhoneNumber.length > 10) {
        this.valid.PhoneNumber = false
      } else {
        this.valid.PhoneNumber = mobilePattern.test(this.data.PhoneNumber)
      }
    } else if (type === 'CreateEmail') {
       this.valid.CreateEmail = emailPattern.test(this.data.CreateEmail);
    }else if (type === ('ConfirmEmail' || 'CreateEmail')) {
      // this.valid.email = emailPattern.test(this.email);
      if (this.data.CreateEmail === this.data.ConfirmEmail) {
        this.valid.CreateEmail = true;
      } else {
        this.valid.CreateEmail = false;
      }
    } else if (type === ('ConfirmPassword' || 'CreatePassword')) {
      if (this.data.CreatePassword !== this.data.ConfirmPassword) {
        this.valid.CreatePassword = false;
      } else {
        this.valid.CreatePassword = true;
      }
    }
  }


  //onkey function which is used to connect to the html file
  onkey(event: any, type: string) {
    if (type === 'UserName') {
      this.data.UserName = event.target.value;
    } else if (type === "CreateEmail") {
      this.data.CreateEmail = event.target.value;
    }else if (type==='ConfirmEmail'){
      this.data.ConfirmEmail = event.target.value;
    } else if (type === "CreatePassword") {
      this.data.CreatePassword = event.target.value;
    } else if (type === "ConfirmPassword") {
      this.data.ConfirmPassword = event.target.value;
    } else if (type === "PhoneNumber") {
      this.data.PhoneNumber = event.target.value;
    } 
    this.validate(type)
  }

  Registerr() {
    const formData = new FormData();
    formData.append("UserName",this.data.UserName)
    formData.append("PhoneNumber",this.data.PhoneNumber)
    formData.append("CreateEmail",this.data.CreateEmail)
    formData.append("ConfirmEmail",this.data.ConfirmEmail)
    formData.append("CreatePassword",this.data.CreatePassword)
    formData.append("ConfirmPassword",this.data.ConfirmPassword)

    
    console.log(this.registerObj)
    // this.api.Registerr(formData)
    //   .subscribe(res => {
    //     alert("success");
    //   })

      this.api.Registerr(formData).subscribe(result=>{ 
        if(result)  this.router.navigate(['/SignIn'] ) , alert("successfully Registered");
        else alert("Registration is failed")
      })
    // this.api.Registerr(formData).subscribe(result=>console.log(result))

  }
}
