import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
cus2:Customer
  constructor() {
    this.cus2=new Customer();
    this.cus2.cname="Preethi";
    this.cus2.email="Preethi@gmail.com";
    this.cus2.mobile=949435671;
    this.cus2.city="Guntur";
    this.cus2.address="Kothapeta";
   }

  ngOnInit() {
  }

}
