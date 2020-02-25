import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  productForm:FormGroup;
  submitted=false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.productForm=this.formbuilder.group({
      proid:['',Validators.required],
      proname:['',Validators.required],
      price:['',Validators.required],
      stock:['',Validators.required]
    });
  }
  onSubmit()
{
  this.submitted=true;
  if(this.productForm.invalid)
  {
    return;
  }
  else
  {
    alert("Form is Validated");
  }
}

get p(){return this.productForm.controls;}
onReset()
{
  this.submitted=false;
  this.productForm.reset();

}

}
