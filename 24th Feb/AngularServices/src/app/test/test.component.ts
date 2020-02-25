import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../Services/calculate.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service:CalculateService) { }

  ngOnInit() 
  {
    console.log('Addition : '+this.service.Add(12,55));
    console.log('Multiplication : '+this.service.Mul(11,48));
    console.log(this.service.Greet('Pranavi'));
  }

  f()
  {
    console.log(this.service.Greet('Preethi'));
  }

  Add()
  {
    console.log('Addition : '+this.service.Add(1,55));
  }

  Mul()
  {
    console.log('Multiplication : '+this.service.Mul(11,8));
  }
}

