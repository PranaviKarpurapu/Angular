import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Employee} from 'src/app/employee';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  dataForm:FormGroup;
  submitted=false;

  id:string;
    name:string;
    doj:Date;
    designation:string;
    mobile:number;
    email:string;
    password:string;
  emp:Employee;
  list:Employee[]=[];
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() { 
    this.dataForm=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern('^[E][1-9]{4}$')]],
      name:['',[Validators.required,Validators.pattern('^[A-Z]{7}$')]],
      doj:['',Validators.required],
      designation:['',Validators.required],
      mobile:['',[Validators.pattern("^[6-9][0-9]{9}$")]],
      email:['',[Validators.email]],
      password:['',[Validators.required,Validators.pattern("^[a-zA-Z]{7}[!@#$%^&*_]{1}$"),Validators.maxLength(8)]]
      
    });
  }
  //convenience getter for easy access to form fields
  get f(){return this.dataForm.controls;}

  onSubmit()
  {
    this.submitted=true;
    //display form values on success
    if(this.dataForm.valid)
    {
      alert('SUCCESS!!! :-) \n\n')
      console.log(JSON.stringify(this.dataForm.value));
      this.emp=new Employee();
    this.emp.id=this.dataForm.value["id"];
    this.emp.name=this.dataForm.value["name"];
    this.emp.doj=this.dataForm.value["doj"];
    this.emp.designation=this.dataForm.value["designation"];
    this.emp.mobile=this.dataForm.value["mobile"];
    this.emp.email=this.dataForm.value["email"];
    this.emp.password=this.dataForm.value["password"];
    this.list.push(this.emp);
    }
    
  }

  onReset()
  {
    this.submitted=false;
    this.dataForm.reset();
  }

}



