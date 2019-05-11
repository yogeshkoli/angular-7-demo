import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddingValidationComponent } from './adding-validation/adding-validation.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { AsynchronousValidationComponent } from './asynchronous-validation/asynchronous-validation.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddingValidationComponent,
    CustomValidationComponent,
    AsynchronousValidationComponent,
    NewCourseFormComponent,
    PostsComponent,
    NavigationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
