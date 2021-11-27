import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.css']
})
export class ForgotEmailComponent implements OnInit {

  constructor(private router: Router) { }

  SignIn(){
    this.router.navigate(['SignIn']);
  }

  ngOnInit(): void {
  }

}
