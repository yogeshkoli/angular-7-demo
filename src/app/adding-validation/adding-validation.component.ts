import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "adding-validation",
  templateUrl: "./adding-validation.component.html",
  styleUrls: ["./adding-validation.component.scss"]
})
export class AddingValidationComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl("", Validators.required)
  });

  constructor() {}

  ngOnInit() {}

  get username() {
    return this.form.get("username");
  }

  get password() {
    return this.form.get("password");
  }
}
