import {Component, OnInit, Input} from '@angular/core';

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

}
