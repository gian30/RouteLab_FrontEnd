import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {escape} from 'querystring';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';


@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {
  @ViewChild('placesRef') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;
  fullAddress = {};
  public options = {
    types: ['(cities)']
  };

  clickToggle(value) {
    value = !value;
  }

  constructor() {
  }

// formato de dirección
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

  }
}


