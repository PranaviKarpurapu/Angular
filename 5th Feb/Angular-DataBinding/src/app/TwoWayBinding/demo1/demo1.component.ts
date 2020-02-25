import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
 msg:string="HELLO ALL";
  constructor() {
    console.log(this.msg);
   }

  ngOnInit() {
  }

}
