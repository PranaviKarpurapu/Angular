import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   item:Student
  constructor() { 
    this.item=new Student();
    this.item.sid=1;
    this.item.sname="Preethi";
    this.item.sdob=new Date(2000,11,8);
    this.item.std="XII";
    this.item.age=19;
  }

  ngOnInit() {
  }

}
