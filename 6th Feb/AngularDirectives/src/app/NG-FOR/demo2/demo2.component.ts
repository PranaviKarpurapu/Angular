import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  no:number[]=[12,23,34,45,56]
  name:string[]=["Pranavi","Gopal","Saradha","Preethi"]

  constructor() 
  { 
    this.name.push("Komal")
  }

  ngOnInit() {
  }

}
