import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [UserService]
})
export class EditProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public me: User = <User>JSON.parse(localStorage.getItem('currentUser'));
  public fullAddress = {};

  constructor(public fb: FormBuilder, public _userService: UserService, public router: Router) {
    this.profileForm = this.fb.group({
      nombre: [this.me.nombre],
      localidad: [this.me.localidad.poblacion],
      edad: [this.me.edad],
      telefono: [this.me.telefono],
      nombreusuario: [this.me.nombreusuario],
      email: [this.me.email],
      pass: [this.me.pass],
      pass2: [this.me.pass]
    });
  }

  ngOnInit() {

  }

  sendInfo() {
    delete this.profileForm.controls['pass2'];
    this.profileForm.controls['localidad'].setValue(this.fullAddress);
    console.log(JSON.stringify(this.profileForm.value));
    this._userService.sendForm(JSON.stringify(this.profileForm.value), 'edit').subscribe(
      resul => {
        console.log(resul.body);
      }, error => {
        console.log(error);
      }
    );
    this.loadUser();
  }

  loadUser() {
    this._userService.loadUser().subscribe(
      resul => {
        const obj: User = JSON.parse(resul.body['data']);
        localStorage.setItem('currentUser', JSON.stringify(obj));
        localStorage.setItem('access_token', obj.token);
        this.router.navigate(['/user']);
      },
      error => {
        console.log(error);
      }
    );
  }

  handleAddressChange(address: Address, index: number) {
    this.fullAddress = {
      poblacion: address.address_components[0]['long_name'],
      pais: address.address_components[3]['long_name'],
      direccion: address.formatted_address,
      latitud: address.geometry.location.lat(),
      longitud: address.geometry.location.lng()
    };

  }
}
