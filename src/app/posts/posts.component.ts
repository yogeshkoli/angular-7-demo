import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPost().subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert('an unexpected error occured.')
      console.log(error);
    });
  }

  addPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = "";

    this.postService.addPost(post)
    .subscribe(response => {
      this.posts.splice(0, 0, response.json());
    }, (error: Response) => {
      if(error.status === 400){
       // this.form.setErrors(error);
      } else {
          alert("an unexpected error occured.");
          console.log(error);
      }
    });
  }

  deletePost(post) {
    this.postService.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: Response) => {
      if(error.status === 404){
         alert("this post has already been deleted");
       }
      else {
          alert("an unexpected error occured.");
          console.log(error);
      }
    });
  }

  updatePost(post) {

    let update = { isRead: true };

    this.postService.updatePost(post.id, update)
    .subscribe(response => {

    }, error => {
      alert("an unexpected error occured.");
      console.log(error);
    });
  }
}
