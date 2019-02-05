import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxLengthValidator } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  langs: string[] = [
    'English',
    'Gujarati',
    'French',
    'German',
  ]
  
  myform: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
          firstName: new FormControl('',Validators.required),
          lastName: new FormControl('',Validators.required),
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+")
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      language :new FormControl("", Validators.required),
      // food: new FormControl('lamb'),
      gender : new FormControl('', Validators.required),
      mobileNo : new FormControl('',[
        Validators.required,
        Validators.pattern("^\d{10}$"),
        Validators.maxLength(10),
        Validators.minLength(10)]),
    }); 

    
    console.log("welcome ::",this.myform.controls);
  }

  get f() { return this.myform.controls; }
  get n() { return this.myform.controls.name; }

  onSubmit() {
    
    if (this.myform.valid) {
      // console.log("MyForm value :::",this.myform.value);a
      console.log("First Name :",this.myform.value.name.firstName);
      console.log("Last Name :",this.myform.value.name.lastName);
      console.log("Email :",this.myform.value.email);
      console.log("Password :",this.myform.value.password);
      console.log("Language :",this.myform.value.language);
      console.log("Gender :",this.myform.value.gender);
      console.log("Mobile No. :",this.myform.value.mobileNo);

    }
    else{
      return;
    }
  }

}
