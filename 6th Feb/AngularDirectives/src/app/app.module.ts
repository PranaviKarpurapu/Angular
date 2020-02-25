import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './NG-IF/demo1/demo1.component';
import { Demo2Component } from './NG-FOR/demo2/demo2.component';
import { Demo3Component } from './NG-FOR/demo3/demo3.component';
import { Demo4Component } from './NG-FOR/demo4/demo4.component';
import { Demo5Component } from './NG-FOR/demo5/demo5.component';
import { SdemoComponent } from './NG-SWITCH/sdemo/sdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    SdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  //bootstrap: [Demo1Component]
  //bootstrap: [Demo2Component]
    bootstrap: [Demo3Component]
  //bootstrap: [Demo4Component]
  //bootstrap: [Demo5Component]
  //bootstrap: [SdemoComponent]
})
export class AppModule { }
