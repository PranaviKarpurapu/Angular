import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  obj:Student;
  constructor() { 
    this.obj={sid:1,sname:'Pranavi',sdob:new Date(1997,9,13),std:'X',age:21};
  }

  ngOnInit() {
  }

}
