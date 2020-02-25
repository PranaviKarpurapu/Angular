import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/project';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.css']
})
export class Demo5Component implements OnInit {
proj:Project[]=[];
pid:number;
pname:string;
dom:string;
startdate:Date;
enddate:Date;
obj:Project;
doms:string[]=["Java","DotNet","AI","Database"];
  constructor() { }

  ngOnInit() {
  }

  public Submit()
  {
    this.obj=new Project();
    this.obj.pid=this.pid;
    this.obj.pname=this.pname;
    this.obj.dom=this.dom;
    this.obj.startdate=this.startdate;
    this.obj.enddate=this.enddate;
    this.proj.push(this.obj);

  }
}
