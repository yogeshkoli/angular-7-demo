import { Http } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {}

  getPost() {
    return this.http.get(this.url);
  }

  addPost(post) {
    return this.http.post(this.url, post);
  }

  deletePost(id) {
    return this.http.delete(this.url + "/" + id);
  }

  updatePost(id, post) {
    return this.http.patch(this.url + "/" + id, post);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
