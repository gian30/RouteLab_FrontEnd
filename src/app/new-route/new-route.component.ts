import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { escape } from 'querystring';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { NewRouteFormComponent } from '../new-route-form/new-route-form.component';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {
  @ViewChild(NewRouteFormComponent) child;
  public markers = [];
  routeMarkers: any = null;
  fullAddress = {};
  lat = 51.678418;
  lng = 7.809007;
  public options = {
    types: ['(cities)']
  };

  receiveMessage($event) {
    this.markers = $event;
    this.loadMarkers();
  }

  loadMarkers() {
    this.routeMarkers = {
      lat: parseFloat(this.markers[0].latitud),
      lng: parseFloat(this.markers[0].longitud),
      origin: {
        lat: parseFloat(this.markers[0].latitud),
        lng: parseFloat(this.markers[0].longitud)
      },
      destination: {
        lat: parseFloat(this.markers[this.markers.length - 1].latitud),
        lng: parseFloat(this.markers[this.markers.length - 1].longitud)
      }
    };
    this.routeMarkers.waypoints = [];
    if (this.markers.length > 2) {
      for (const cont in this.markers) {
        if (Number(cont) !== 0 && Number(cont) !== this.markers.length - 1) {
          const location = {
            lat: parseFloat(this.markers[cont].latitud),
            lng: parseFloat(this.markers[cont].longitud)
          };
          this.routeMarkers.waypoints.push({
            location: location
          });
        }
      }
    }
    console.log(this.routeMarkers);
  }


  clickToggle(value) {
    value = !value;
  }

  constructor() {
  }

  ngOnInit() {
  }
}


