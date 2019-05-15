import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../models/post';
import {PostService} from '../services/post.service';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.css'],
  providers: [PostService]
})

export class GalleryComponent implements OnInit {
  photoIndividual = '../../assets/img/test.jpg';
  photos = [];
  constructor(private _postService: PostService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.loadPhoto(id, this.photos);
  }

loadPhoto() {
      this._postService.getPhoto(this.id).subscribe(
      resul => {
        if (resul.body !== null) {
          console.log('entro');
          this.photos = resul.body['data'];
          console.log('FOTO' + this.photos);
          }
      }, error => {
        console.log(error);
      }
    );
  }
}
