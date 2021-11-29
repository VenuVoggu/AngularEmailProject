import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

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
