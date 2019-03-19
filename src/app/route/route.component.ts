import {Component, OnInit} from '@angular/core';
import * as jQuery from 'jquery';
import {AgmCoreModule} from '@agm/core';
import {PostService} from "../services/post.service";
import {Post} from "../models/post";
import { ActivatedRoute } from '@angular/router';

declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css'],
  providers: [PostService]
})
export class RouteComponent implements OnInit {
  public post = new Post();
  private id = this.route.snapshot.paramMap.get("id")
   STAR = ('../../assets/icons/star.png');
   CURRENTIMG = ('../../assets/img/route_image.png');
   ROUTEIMGS = [
    '../../assets/img/sample_images/1.jpg',
    '../../assets/img/sample_images/2.jpg',
    '../../assets/img/sample_images/3.jpg',
    '../../assets/img/sample_images/4.jpg',
    '../../assets/img/sample_images/5.jpg',
    '../../assets/img/sample_images/6.jpg',
    '../../assets/img/sample_images/7.jpg',
    '../../assets/img/sample_images/8.jpg',
    '../../assets/img/sample_images/9.jpg',
    '../../assets/img/sample_images/10.jpg'
  ];


  lat: number = 41.3907285;
  lng: number = 2.1745089;
  origin = { lat: 41.388909, lng: 2.167621 };
  destination = { lat: 41.391496, lng: 2.155151 };


  constructor(private _postService: PostService, private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    $('.photo__preview').slick({
      arrows: false,
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 5,
      focusOnSelect: true,
      dots: false,
      infinite: true,

    });
  }

  loadPosts() {
    this._postService.getPost(this.id).subscribe(
      resul => {
        if (resul.body !== null) {
          this.post = <Post> resul.body['data'];
          console.log(this.post);
        }
      }, error => {
        alert('error!');
      }
    );
  }

  loadPhoto(photo) {
    this.CURRENTIMG = photo;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.loadPosts()

  }

}
