import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../Services/calculate.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers:[CalculateService]
})
export class DemoComponent implements OnInit {

  constructor(private service:CalculateService) { }

  ngOnInit() {
  }

  Sub()
  {
    console.log('Subtraction : '+this.service.Sub(100,55));
  }

  Div()
  {
    console.log('Division : '+this.service.Div(11,8));
  }
}

