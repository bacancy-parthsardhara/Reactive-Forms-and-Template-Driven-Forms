import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('f') form: any;

  // subject: string[] = [
  //   'Maths',
  //   'Science',
  //   'Computer',
  // ];

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  model : {};
  constructor() { }

  ngOnInit() {
    this.model = {
      "name": {
        "firstName": "",
        "lastName": ""
      },
      "email": "",
      "password": "",
      "gender": "",
      "mobileNo": "",
      "subject": {
        maths: false,
        computer: false,
        science: false
      },
      "language": ""
    }
  }

  onSubmit(){
    if (this.form.valid) {
      console.log("First Name ::", this.form.controls.name.controls.firstName.value);
      console.log("Last Name ::", this.form.controls.name.controls.lastName.value);
      console.log("Email ::", this.form.controls.email.value);
      console.log("Password ::", this.form.controls.password.value);
      console.log("Gender ::", this.form.controls.gender.value);
      console.log("Mobile No. ::", this.form.controls.mobileNo.value);
      console.log("Subject ::", this.form.controls.subject.value);
      console.log("Language ::", this.form.controls.language.value);

      this.form.reset();
    }
  }

}
