import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { UserModel } from '../shared/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public registerObj = new UserModel();
  constructor(private http: HttpClient, private router: Router, private api: ApiService) { }

  public data={
    
    CreateEmail:"",
    ConfirmPassword : "",
  }
    valid = {
      CreateEmail: true,
      ConfirmPassword:true,
    }

  ngOnInit(): void {
  }

  validate(type: string): void {
    const emailPattern = /\S+@\S+\.\S+/;
    if (type === 'CreateEmail') {
      this.valid.CreateEmail = emailPattern.test(this.data.CreateEmail);
    }
  }

  onkey(event: any, type: string) {
    if (type === "CreateEmail") {
      this.data.CreateEmail = event.target.value;
    }else if (type === "ConfirmPassword") {
      this.data.ConfirmPassword = event.target.value;
    }
    this.validate(type)
  }

  EmailLogin() {
    const formData = new FormData();   
    formData.append("CreateEmail",this.data.CreateEmail)
    formData.append("ConfirmPassword",this.data.ConfirmPassword)

    
    console.log(this.registerObj)
    // this.api.EmailLogin(formData)
    //   .subscribe(res => {
    //     alert("success");
    //   })
   
      this.api.EmailLogin(formData).subscribe(result=>{ 
        if(result)  this.router.navigate(['/MainPage']) , alert("success");
        else alert("fail")
      })

  }

}
 // this.api.Registerr(formData).subscribe(result=>console.log(result))
