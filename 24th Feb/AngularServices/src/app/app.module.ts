import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateService } from './Services/calculate.service';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';

import {HttpClientModule } from '@angular/common/http';
import { Demo1Component } from './demo1/demo1.component';
import { ItemService } from './Services/item.service';
import { ViewallComponent } from './viewall/viewall.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DemoComponent,
    Demo1Component,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CalculateService,ItemService],
  bootstrap: [ViewallComponent]
})
export class AppModule { }
