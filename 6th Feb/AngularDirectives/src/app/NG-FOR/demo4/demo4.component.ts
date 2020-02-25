import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component implements OnInit {
  list:Student[]=[];
  sid:number;
  sname:string;
  std:number;
  age:number;
  item:Student;

  stds:string[]=["I","II","III","IV"];
  
  constructor() { }

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
}
