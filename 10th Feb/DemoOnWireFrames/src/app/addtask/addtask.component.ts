import { Component, OnInit } from '@angular/core';
import { Task } from '../Model/task';
import {Router,RouterModule} from'@angular/router';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  name:string;
  priority:Range;
  startdate:Date;
  enddate:Date;
  item:Task;
  list:Task[]=[];
    constructor() {
      this.item=new Task();
     }
  
    ngOnInit(): void {
    }
  public addTask()
  {
    this.item.name=this.name;
    this.item.priority=this.priority;
    this.item.startdate=this.startdate;
    this.item.enddate=this.enddate;
    if(localStorage.getItem('tsk'))
    {
      this.list=JSON.parse(localStorage.getItem('tsk'));
    }
    this.list.push(this.item);
    localStorage.setItem("tsk",JSON.stringify(this.list));
  
  }
  public reset()
  {
   this.item.name=null;
   this.item.priority=null;
   this.item.startdate=null;
   this.item.enddate=null;
  }
  }
  