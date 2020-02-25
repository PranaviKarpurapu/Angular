import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  cus:Customer;

  constructor() { 
   this.cus={cname:'Pranavi',email:'Pranavi@gmail.com',mobile:7013795775,city:'Guntur',address:'Arundalpeta'};
  }
   ngOnInit() {
  }

}
