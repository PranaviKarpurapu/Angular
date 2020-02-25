import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  emp:Employee
  constructor() {
    
        this.emp=new Employee();
   }

  ngOnInit() {
  }

  public Add()
  {
    
    console.log(this.emp);
  }
}
