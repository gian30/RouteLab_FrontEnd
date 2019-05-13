import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { stringify } from 'querystring';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-route-form',
  templateUrl: './new-route-form.component.html',
  styleUrls: ['./new-route-form.component.css'],
  providers: [PostService]
})
export class NewRouteFormComponent implements OnInit {
  public category = 'Categoría';
  public categories = ['Sol y playa', 'Deportivo', 'Naturaleza', 'De montaña', 'Histórico', 'Aventura', 'Rural', 'Científico'];
  constructor(public fb: FormBuilder, public _postService: PostService) {
    this.getRecs();
    this.routeForm = this.fb.group({
      name: [],
      description: [],
      categories: [],
      markers: [],
      photos: [],
      distance: [],
      recs: new FormArray([
      ])
    });
    this.addCheckboxes();
  }

  public routeForm: FormGroup;
  public fullAddress: {};
  public recomendations = [];
  public selectedFile: File;
  public urls = [];
  public files: File[] = [];
  public routePoints = [];
  public markers = [];

  @Output() messageEvent = new EventEmitter<Array<any>>();
  options = {
    types: ['(cities)'],
    componentRestrictions: { country: 'es' }
  };
  recs: any[] = [];
  recomendation: { name: string, selected: boolean; id: number };

  handleAddressChange(address: Address, index: number) {
    this.fullAddress = {
      poblacion: address.address_components[0]['long_name'],
      pais: address.address_components[3]['long_name'],
      direccion: address.formatted_address,
      latitud: address.geometry.location.lat(),
      longitud: address.geometry.location.lng()
    };
    this.markers[index] = this.fullAddress;
    this.sendMessage();
  }

  sendMessage() {
    this.messageEvent.emit(this.markers);
  }

  addRoutePoint() {
    let name = "point" + this.routePoints.length;
    this.routePoints.push(name);
  }

  removePoint(point) {
    this.routePoints.splice(this.routePoints.indexOf(point), 1);
    this.markers.splice(this.routePoints.indexOf(point), 1);
    this.sendMessage();
  }

  ngOnInit() {

  }

  uploadRoute() {
    console.log(this.routeForm);
  }

  assignBlack() {
    const element = document.getElementById('addBlack');
    element.classList.add('black');
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.urls.push(event.target.result);
    }
    this.files.push(event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);
  }
  getRecs() {
    this._postService.getRecomendaciones().subscribe(
      resul => {
        if (resul.body !== null) {
          this.recomendations = resul.body['data'];
          console.log(this.recomendations);
          for (let rec of this.recomendations) {
            console.log(rec);
            this.recomendation = {
              name: rec.descripcion,
              selected: false,
              id: rec.idrec
            };
            this.recs.push(this.recomendation);
          }
          console.log(this.recs);
          this.addCheckboxes();
        }
      }, error => {
        console.log(error);
      }
    );
  }
  private addCheckboxes() {
    this.recs.map((o, i) => {
      const control = new FormControl(i === 0);
      (this.routeForm.controls.recs as FormArray).push(control);
    });
  }

  addPost() {
    this._postService.postPost(this.files, this.routeForm.value).subscribe(
      resul => {
        console.log(resul.body);
      }, error => {
        console.log(error);
      }
    );
  }

  calculateDistance(origin, destination) {
    const org = new google.maps.LatLng(origin.latitud, origin.longitud);
    const dest = new google.maps.LatLng(destination.latitud, destination.longitud);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(org, dest);
    return distance;
  }

  onUpload() {
    this.routeForm.controls['markers'].setValue(this.markers);
    this.routeForm.controls['distance'].setValue(this.calculateDistance(this.markers[0], this.markers[this.markers.length]));
    console.log(this.routeForm);
    this.addPost();
  }

  onSubmit() {

  }



}
