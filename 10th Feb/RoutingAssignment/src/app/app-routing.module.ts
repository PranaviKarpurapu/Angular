import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {BuyerComponent} from './buyer/buyer.component';
import {SellerComponent} from './seller/seller.component';

import{ AddcategoriesComponent }from './addcategories/addcategories.component';
import {AddorremovebuyerComponent} from './addorremovebuyer/addorremovebuyer.component';
import {AddorremovesellerComponent} from './addorremoveseller/addorremoveseller.component';
import {AdditemsComponent} from './additems/additems.component';
import {ViewitemsComponent} from './viewitems/viewitems.component';
import {BuyitemsComponent} from './buyitems/buyitems.component';
import {ViewcartComponent} from './viewcart/viewcart.component'; 
import {PaymentComponent} from './payment/payment.component';

const routes: Routes = [

  {path:'login' ,component:LoginComponent},
  {path:'admin' ,component:AdminComponent,children:[
    {path:'addcategory' ,component:AddcategoriesComponent},
    {path:'addorremovebuyer' ,component:AddorremovebuyerComponent},
    {path:'addorremoveseller' ,component:AddorremovesellerComponent}
  ]},
  {path:'buyer' ,component:BuyerComponent,children:[
    {path:'buyitem' ,component:BuyitemsComponent},
    {path:'viewcart' ,component:ViewcartComponent},
    {path:'payment' ,component:PaymentComponent}
  ]},
  {path:'seller' ,component:SellerComponent,children:[
    {path:'additems' ,component:AdditemsComponent},
    {path:'viewitems' ,component:ViewitemsComponent}
  ]},
  
  {path:'',redirectTo:'login',pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
