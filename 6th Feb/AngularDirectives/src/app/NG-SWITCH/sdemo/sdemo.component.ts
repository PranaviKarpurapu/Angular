import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdemo',
  templateUrl: './sdemo.component.html',
  styleUrls: ['./sdemo.component.css']
})
export class SdemoComponent implements OnInit {
  items:any[]=[
    {name:'One',val:1},
    {name:'Two',val:2},
    {name:'Three',val:3}
              ];
  selectedValue:string='One';
  constructor() { }

  ngOnInit() {
  }

}
