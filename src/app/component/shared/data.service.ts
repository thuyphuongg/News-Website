import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Posts} from "../model/posts";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add posts
  addPosts(posts : Posts) {
    posts.id = this.afs.createId();
    return this.afs.collection('/Posts').add(posts);
  }

  // get all posts
  getAllPosts() {
    return this.afs.collection('/Posts').snapshotChanges();
  }

  // delete posts
  deletePosts(posts : Posts) {
    this.afs.doc('/Posts/'+posts.id).delete();
  }

  // update posts
  updatePosts(posts : Posts) {
    this.deletePosts(posts);
    this.addPosts(posts);
  }

}
