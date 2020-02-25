import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { BuyitemsComponent } from './buyitems/buyitems.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdditemsComponent } from './additems/additems.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { AddcategoriesComponent } from './addcategories/addcategories.component';
import { AddorremovebuyerComponent } from './addorremovebuyer/addorremovebuyer.component';
import { AddorremovesellerComponent } from './addorremoveseller/addorremoveseller.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    SellerComponent,
    AdminComponent,
    LoginComponent,
    BuyitemsComponent,
    ViewcartComponent,
    PaymentComponent,
    AdditemsComponent,
    ViewitemsComponent,
    AddcategoriesComponent,
    
    AddorremovebuyerComponent,
    AddorremovesellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
