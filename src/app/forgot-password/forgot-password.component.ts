import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  email = "";

    valid = {
      email: true,
    }

  ngOnInit(): void {
  }

  validate(type: string): void {
    const emailPattern = /\S+@\S+\.\S+/;
    if (type === 'email') {
      this.valid.email = emailPattern.test(this.email);
    }
  }

  onkey(event: any, type: string) {
    if (type === "email") {
      this.email = event.target.value;
    }this.validate(type)
  }
}
