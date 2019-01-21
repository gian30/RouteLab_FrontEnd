import {Component, OnInit} from '@angular/core';
import * as jQuery from 'jquery';

declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  private STAR = ('../../assets/icons/star.png');
  private CURRENTIMG = ('../../assets/img/route_image.png');
  private ROUTEIMGS = [
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

  constructor() {
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
  ngAfterViewChecked() {
    window.scrollTo(0, 0);
  }

  loadPhoto(photo) {
    this.CURRENTIMG = photo;
  }

  ngOnInit() {

  }

}
