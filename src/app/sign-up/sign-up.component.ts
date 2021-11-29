import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
//import { sign } from 'crypto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

    username = "";
    email = "";
    confirmemail="";
    phonenumber = "";
    password = "";
    confirmPassword = "";
    age = "";
  
  valid = {
    username: true,
    lastname: true,
    email: true,
    confirmemail: true,
    phonenumber: true,
    password: true,
    confirmPassword: true,
  }
  

  ngOnInit(): void {
  }
  //validation part
  validate(type: string): void {
    const usernamePattern = /^[a-zA-Z]+$/
    const emailPattern = /\S+@\S+\.\S+/;
    const mobilePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (type === 'username') {
      if (this.username.length < 4 || this.username.length >= 10) {
        this.valid.username = false;
      } else {
        this.valid.username = usernamePattern.test(this.username);
      }
    } else if (type === "phonenumber") {
      if (this.phonenumber.length < 10 || this.phonenumber.length > 10) {
        this.valid.phonenumber = false
      } else {
        this.valid.phonenumber = mobilePattern.test(this.phonenumber)
      }
    } 
    else if (type === ('confirmemail' || 'email')) {
      // this.valid.email = emailPattern.test(this.email);
      if (this.email !== this.confirmemail) {
        this.valid.email = false;
      } else {
        this.valid.email = true;
      }
    } else if (type === ('confirmPassword' || 'password')) {
      if (this.password !== this.confirmPassword) {
        this.valid.password = false;
      } else {
        this.valid.password = true;
      }
    }
  }


  //onkey function which is used to connect to the html file
  onkey(event: any, type: string) {
    if (type === 'username') {
      this.username = event.target.value;
    } else if (type === "email") {
      this.email = event.target.value;
    }else if (type==='confirmemail'){
      this.confirmemail = event.target.value;
    } else if (type === "password") {
      this.password = event.target.value;
    } else if (type === "confirmPassword") {
      this.confirmPassword = event.target.value;
    } else if (type === "phonenumber") {
      this.phonenumber = event.target.value;
    } 
    this.validate(type)
  }

  Register() {
    const formData = new FormData();
    formData.append("UserName",this.username)
    formData.append("Emailid",this.email)
    formData.append("phnNo",this.phonenumber)
    formData.append("CreatePassword",this.password)
    
  }
}
