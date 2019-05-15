import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { AgmCoreModule } from '@agm/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { ActivatedRoute, Route } from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { post } from 'selenium-webdriver/http';


declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css'],
  providers: [PostService]
})
export class RouteComponent implements OnInit {

  commentForm: FormGroup;
  public currentUser: User;
  private id = this.route.snapshot.paramMap.get('id');
  public post: Post = new Post();
  public comments: any = [];
  public photos: any = [];
  public recomendations: any = [];
  STAR = ('../../assets/icons/star.png');
  CURRENTIMG = ('../../assets/uploads/posts/' + this.id + '/0.jpg');
  ROUTEIMGS = [
    '../../assets/uploads/posts/' + this.id + '/0.jpg'
  ];

  public recomendaciones = {
    Tiempo: 'fas fa-cloud',
    Ropa: 'fas fa-tshirt',
    Deporte: 'fas fa-running',
    Calor: 'fas fa-sun',
    Frio: 'fas fa-snowflake',
  };

  routeMarkers: any = null;
  searchResults: [] = null;

  constructor(public _loginService: LoginService, private _postService: PostService, private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
  }

  ngAfterViewInit(): void {

  }

  public float2int(value) {
    return value | 0;
  }

  loadPost() {
    this._postService.getPost(this.id).subscribe(
      resul => {
        if (resul.body !== null) {
          this.post = <Post>resul.body['data'];
          this.getPhotos();
          $('.photo__preview').slick({
            lazyLoad: 'ondemand',
            arrows: false,
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 5,
            focusOnSelect: true,
            dots: false,
            infinite: true,
          });
          console.log(this.post);
          console.log(this.post.markers[0].latitud);
          this.loadMarkers();
          this.similarRoutes();
        }
      }, error => {
        console.log(error);
      }
    );
  }
  getPhotos() {
    for (let ph = 1; ph < this.post.num_fotos; ph++) {
      const url = '../../assets/uploads/posts/' + this.id + '/' + (ph) + '.jpg';
      this.ROUTEIMGS.push(url);
    }
  }

  similarRoutes() {
    this._postService.getSearchResults(this.post.titulo, "route").subscribe(
      resul => {
        if (resul.body !== null) {
          this.searchResults = resul.body['data'];
          console.log(this.searchResults);
        }
      }, error => {
        console.log(error);
      }
    );
  }


  loadComments() {
    this._postService.getComment(this.id).subscribe(
      resul => {
        if (resul.body !== null) {
          this.comments = resul.body['data'];
          console.log(this.comments);
        }
      }, error => {
        console.log(error);

      }
    );
  }
  loadRecomendaciones() {
    this._postService.getRecomendacion(this.id).subscribe(
      resul => {
        if (resul.body !== null) {
          this.recomendations = resul.body['data'];
          console.log(this.recomendations);
        }
      }, error => {
        console.log(error);

      }
    );
  }
  loadMarkers() {
    this.routeMarkers = {
      lat: parseFloat(this.post.markers[0].latitud),
      lng: parseFloat(this.post.markers[0].longitud),
      origin: {
        lat: parseFloat(this.post.markers[0].latitud),
        lng: parseFloat(this.post.markers[0].longitud)
      },
      destination: {
        lat: parseFloat(this.post.markers[this.post.markers.length - 1].latitud),
        lng: parseFloat(this.post.markers[this.post.markers.length - 1].longitud)
      }
    };
    this.routeMarkers.waypoints = [];
    if (this.post.markers.length > 2) {
      for (const cont in this.post.markers) {
        if (Number(cont) !== 0 && Number(cont) !== this.post.markers.length - 1) {
          const location = {
            lat: parseFloat(this.post.markers[cont].latitud),
            lng: parseFloat(this.post.markers[cont].longitud)
          };
          this.routeMarkers.waypoints.push({
            location: location
          });
        }
      }
    }
    console.log(this.routeMarkers);
  }
  addComment() {
    const comment = {
      'idusuario': this.currentUser.idusuario,
      'comentario': this.commentForm.controls.comment.value,
      'idpost': this.id
    };
    this._postService.postComment(JSON.stringify(comment)).subscribe(
      resul => {
        console.log(resul.body);
        this.loadComments();
      }, error => {
        console.log(error);
      }
    );
    this.commentForm.controls.comment.setValue('');
  }

  loadPhoto(photo) {
    this.CURRENTIMG = photo;
  }

  valorar(val) {
    console.log(val);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.loadPost();
    this.loadRecomendaciones();
    this.loadComments();
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required]]
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

}
