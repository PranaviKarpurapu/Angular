import { Component, OnInit } from '@angular/core';
import { Task } from '../Model/task';
@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  lists:Task[]=[];
  constructor() { 
    this.lists=JSON.parse(localStorage.getItem('tsk'));
    console.log(this.lists)

  }

  ngOnInit() {
  }

}

