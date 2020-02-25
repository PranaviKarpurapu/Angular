import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ExampleComponent} from './example/example.component';
import {RegisterComponent} from './register/register.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'example',component:ExampleComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
