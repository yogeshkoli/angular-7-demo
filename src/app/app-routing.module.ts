import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { AsynchronousValidationComponent } from './asynchronous-validation/asynchronous-validation.component';
import { AddingValidationComponent } from './adding-validation/adding-validation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "validation", component: AddingValidationComponent },
  { path: "asynchronous-validation", component: AsynchronousValidationComponent },
  { path: "custom-validation", component: CustomValidationComponent },
  { path: "formarray-demo", component: NewCourseFormComponent },
  { path: "posts", component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
