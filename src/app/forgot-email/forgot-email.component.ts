import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.css']
})
export class ForgotEmailComponent implements OnInit {

  constructor() { }

  phonenumber = "";

  valid = {
    phonenumber: true,
  }

  ngOnInit(): void {
  }

  validate(type: string): void {
    const mobilePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (type === "phonenumber") {
      if (this.phonenumber.length < 10 || this.phonenumber.length > 10) {
        this.valid.phonenumber = false
      } else {
        this.valid.phonenumber = mobilePattern.test(this.phonenumber)
      }
    }
  }

  onkey(event: any, type: string) {
    if (type === "phonenumber") {
      this.phonenumber = event.target.value;
    } 
    this.validate(type)
  }
}
