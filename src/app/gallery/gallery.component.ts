import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../models/post";
import { PostService } from '../services/post.service';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.css'],
  providers: [PostService]
})

export class GalleryComponent implements OnInit {
  photoIndividual = '../../assets/img/test.jpg';
  protected posts: Post[];
  public me: User = <User>JSON.parse(localStorage.getItem("currentUser"));
  public urls: any[] = [];
  public rutas: any[] = [];
  constructor(private _postService: PostService) {
  }

  @Input() user?: number;

  ngOnInit() {
    this.loadPhoto();

  }

  loadPhoto() {
    this._postService.getPostsById(this.user).subscribe(
      resul => {
        if (resul.body !== null) {
          this.posts = <Post[]>resul.body['data'];
          this.posts.forEach(post => {
            for (let i = 0; i < post.num_fotos; i++) {
              let photo = "../../assets/uploads/posts/" + post.idpost + "/" + i + ".jpg";
              this.urls.push(photo);
              this.rutas.push(post.idpost);
            }
          });
          console.log(this.urls);
        }
      }, error => {
        console.log(error);
      }
    );
  }
}
