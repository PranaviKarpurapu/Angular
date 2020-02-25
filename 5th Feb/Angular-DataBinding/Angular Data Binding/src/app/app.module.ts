import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Interpolation/demo/demo.component';
//import { ViewComponent } from './Interpolation/view/view.component';
//import { ViewCustomerComponent } from './Interpolation/view-customer/view-customer.component';
import { ViewComponent } from './PropertyBinding/view/view.component';
import { ViewCustomerComponent } from './PropertyBinding/view-customer/view-customer.component';
import { EventDemoComponent } from './EventBinding/event-demo/event-demo.component';
import { Demo1Component } from './TwoWayBinding/demo1/demo1.component';
import { Demo2Component } from './TwoWayBinding/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewComponent,
    ViewCustomerComponent,
    EventDemoComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  //bootstrap: [DemoComponent]
  //bootstrap: [ViewComponent]
  //bootstrap: [ViewCustomerComponent]
  //bootstrap: [EventDemoComponent]
  //bootstrap: [Demo1Component]
    bootstrap: [Demo2Component]
})
export class AppModule { }







