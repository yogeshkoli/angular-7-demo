import { UsernameValidators } from './../validators/username.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "asynchronous-validation",
  templateUrl: "./asynchronous-validation.component.html",
  styleUrls: ["./asynchronous-validation.component.scss"]
})
export class AsynchronousValidationComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl("", Validators.required, UsernameValidators.shouldBeUnique),
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
