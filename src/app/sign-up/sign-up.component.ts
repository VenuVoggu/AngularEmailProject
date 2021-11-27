import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { sign } from 'crypto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  Login(){
    this.router.navigate(['SignIn']);
  }
  ngOnInit(): void {
  }

}
