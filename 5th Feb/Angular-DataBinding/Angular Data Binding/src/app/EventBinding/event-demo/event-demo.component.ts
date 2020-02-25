import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.css']
})
export class EventDemoComponent implements OnInit {
  name:string;
  res:number;
  constructor() { }

  ngOnInit() {
  }
  
  public setName()
  {
    this.name="Gopal";
  }

  public Greet(val:string)
  {
     this.name=val;
  }

  public Add(val1:number,val2:number)
  {
    this.res=Number(val1)+Number(val2)
  }

  public Subtract(val1:number,val2:number)
  {
    this.res=(val1-val2);
  }
}


