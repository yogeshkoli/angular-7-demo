import { UsernameValidators } from './../validators/username.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "custom-validation",
  templateUrl: "./custom-validation.component.html",
  styleUrls: ["./custom-validation.component.scss"]
})
export class CustomValidationComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
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
