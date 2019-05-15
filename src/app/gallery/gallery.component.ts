import {Component, OnInit, Input} from '@angular/core';
import {Post} from "../models/post";



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.css']
})

export class GalleryComponent implements OnInit {
  photoIndividual = '../../assets/img/test.jpg';

  constructor() {
  }

  ngOnInit() {
  }

 /* loadPhoto() {
    this._postService.getPost(this.id).subscribe(
      resul => {
        if (resul.body !== null) {
          this.post = <Post>resul.body['data'];

          console.log(this.post);
          console.log(this.post.markers[0].latitud);
          this.loadMarkers();
          this.similarRoutes();
        }
      }, error => {
        console.log(error);
      }
    );
  }*/
}
