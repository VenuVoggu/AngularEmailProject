import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { UserModel } from '../shared/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  public registerObj = new UserModel();
  constructor(private http: HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }

  public data={
    ToMail:"",
    Message:"",
  }

  valid = {
    ToMail: true,
    Message: true,
  }

  validate(type: string): void {
    const emailPattern = /\S+@\S+\.\S+/;

    if (type === 'ToMail') {
      this.valid.ToMail = emailPattern.test(this.data.ToMail);
   }
  }

  onkey(event: any, type: string) {
    if (type==='ToMail'){
      this.data.ToMail = event.target.value;
    }
    else if (type === "Message") {
      this.data.Message = event.target.value;
    }this.validate(type)
  }

  SentMessages() {
    const formData = new FormData();
    formData.append("ToMail",this.data.ToMail)
    formData.append("Message",this.data.Message)
 
    console.log(this.registerObj)
 
      this.api.SentMessages(formData).subscribe(result=>{ 
        if(result)  this.router.navigate(['/MainPage'] ) , alert("Mail Sent");
        else alert("Mail not sent")
      })
    // this.api.Registerr(formData).subscribe(result=>console.log(result))

  }

  
}
