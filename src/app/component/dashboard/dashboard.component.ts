import { Component, OnInit } from '@angular/core';
import { AuthService} from "../shared/auth.service";
import { DataService} from "../shared/data.service";
import {Posts} from "../model/posts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postsList: Posts[] = [];
  postsObj: Posts = {
    id: '',
    category: '',
    title: '',
    content: '',
    link : ''

  };
  id: string = '';
  category: string = '';
  title: string = '';
  content: string = '';
  link: string = '';

  constructor(private auth: AuthService, private data: DataService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  register() {
    this.auth.logout();
  }


  getAllPosts() {


    this.data.getAllPosts().subscribe(res => {

      this.postsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching post data');
    })

  }

  resetForm() {
    this.id = '';
    this.category = '';
    this.title = '';
    this.content = '';
    this.link = '';
  }

  addPosts() {
    if (this.category == '' || this.title == '' || this.content == '' || this.link == '') {
      alert('Fill all input fields');
      return;
    }

    this.postsObj.id = '';
    this.postsObj.category = this.category;
    this.postsObj.title = this.title;
    this.postsObj.content = this.content;
    this.postsObj.link = this.link;

    this.data.addPosts(this.postsObj);
    this.resetForm();

  }

  updatePosts() {

  }

  deletePosts(posts: Posts) {
    if (window.confirm('Are you sure you want to delete ' + posts.category + ' ' + posts.title + ' ?')) {
      this.data.deletePosts(posts);
    }
  }

}
