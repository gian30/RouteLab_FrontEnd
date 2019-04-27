import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../models/post';
import {PostService} from '../services/post.service';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
  providers: [PostService]
})
export class RoutesComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private _postService: PostService) {
  }

  private ROUTE_SAMPLE = ('../../assets/img/sample_route.png');
  private LOCATION = ('../../assets/icons/location.png');
  private STAR = ('../../assets/icons/star.png');
  private TIMER = ('../../assets/icons/timer.png');
  loadRoutes = true;
  @Input() titleRoutes: string;


  routes = [];

  category = 'Categoría';
  categories = ['Sol y playa', 'Deportivo', 'Naturaleza', 'De montaña', 'Histórico', 'Aventura', 'Rural', 'Científico'];

  loadRoute() {
    this.loadRoutes = !this.loadRoutes;
  }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
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

  assignBlack() {
    const element = document.getElementById('addBlack');
    element.classList.add('black');
  }
}
