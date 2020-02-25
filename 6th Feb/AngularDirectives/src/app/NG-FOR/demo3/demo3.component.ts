import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
  list:Student[]=[];
  sid:number;
  sname:string;
  std:number;
  age:number;
  item:Student;
  stds:string[]=["I","II","III","IV"];
  val:boolean=true;
  constructor() {
    this.list=[{sid:1,sname:'Rohan',std:12,age:19},
               {sid:2,sname:'Rakesh',std:11,age:18},
               {sid:3,sname:'Raj',std:10,age:17},
               {sid:4,sname:'Riya',std:9,age:16}]
   }

  ngOnInit() {
  }

  public Add()
  {
    this.item=new Student();
    this.item.sid=this.sid;
    this.item.sname=this.sname;
    this.item.std=this.std;
    this.item.age=this.age;
    this.list.push(this.item);

  }

  public SetVal()
  {
    this.val=!this.val;
  }
}
