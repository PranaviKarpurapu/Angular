import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pwd:string;
  errmsg:string;
  constructor(private route: Router) { }

  ngOnInit() {
  }
public Login()
{
  if(this.uname=="SaiKrishna" && this.pwd=="123")
  {
    sessionStorage.setItem("b",this.uname);
     this.route.navigateByUrl('buyer')
  } 
  else if(this.uname=="Devika" && this.pwd=="1234")
  {
    sessionStorage.setItem("s",this.uname);
    this.route.navigateByUrl('seller')
  }
  else if(this.uname=="Pranavi" && this.pwd=="12345")
  {
    sessionStorage.setItem("a",this.uname);
    this.route.navigateByUrl('admin')
  }
  else
    this.errmsg="Invalid Credentials";
}
}
