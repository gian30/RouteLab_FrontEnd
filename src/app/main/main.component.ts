import {Component, ElementRef, OnInit} from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {ViewChild, NgZone} from '@angular/core';
import * as jQuery from 'jquery';
declare var $: any;
declare var jquery: any;
declare var google;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loadGoogle = false;
  @ViewChild('placesRef') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;
  private BG = ('../../assets/img/home_bg.png');
  category = 'Categoría';
  categories = ['Sol y playa', 'Deportivo', 'Naturaleza', 'De montaña', 'Histórico', 'Aventura', 'Rural', 'Científico'];
  titleVisible = true;
  searchVisible = true;
  fullAddress = {};
  options = {
    types: ['(cities)']
  };
  clickToggle(value) {
    value = !value;
  }


  assignBlack() {
    const element = document.getElementById('addBlack');
    element.classList.add('black');
  }



  constructor() {
  }

  public handleAddressChange(address: Address) {
    this.fullAddress = {
      poblacion: address.address_components[0]['long_name'],
      pais: address.address_components[3]['long_name'],
      direccion: address.formatted_address,
      latitud: address.geometry.location.lat(),
      longitud: address.geometry.location.lng()
    };
  }

  ngOnInit() {
    window.setTimeout(() => {this.loadGoogle = true; }, 0.0001);
  }

}
