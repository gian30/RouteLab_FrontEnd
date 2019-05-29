import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
  providers: [PostService]
})
export class RoutesComponent implements OnInit {

  constructor(private _postService: PostService) {
  }

  public posts: Post[] = [];

  protected ROUTE_SAMPLE = ('../../assets/img/sample_route.png');
  protected LOCATION = ('../../assets/icons/location.png');
  protected STAR = ('../../assets/icons/star.png');
  protected TIMER = ('../../assets/icons/timer.png');
  loadRoutes = true;
  @Input() titleRoutes: string;

  @Input() user?: number;

  routes = [];

  category = 'Categoría';
  categories = ['Sol y playa', 'Deportivo', 'Naturaleza', 'De montaña', 'Histórico', 'Aventura', 'Rural', 'Científico'];

  public currentEuroRates: any = null;

  loadRoute() {
    this.loadRoutes = !this.loadRoutes;
  }

  ngOnInit() {
    this.loadPosts();


  }
  loadPosts() {
    if (this.user !== undefined) {
      this._postService.getPostsById(this.user).subscribe(
        resul => {
          if (resul.body !== null) {
            this.posts = <Post[]>resul.body['data'];
            console.log(this.posts);
          }
        }, error => {
          console.log(error);
        }
      );
    } else {
      this._postService.getPosts().subscribe(
        resul => {
          if (resul.body !== null) {
            this.posts = <Post[]>resul.body['data'];
            console.log(this.posts);
          }
        }, error => {
          console.log(error);
        }
      );
    }
  }

  public float2int(value) {
    return value | 0;
  }


  assignBlack() {
    const element = document.getElementById('addBlack');
    element.classList.add('black');
  }
}


