/// <reference types="@types/googlemaps" />
import {Component, OnInit} from '@angular/core';
import {ViewChild, ElementRef, NgZone,} from '@angular/core';
import {LoginService} from './login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from './_helpers/must-match.validator';
import {MapsAPILoader} from '@agm/core';
import {FormControl} from '@angular/forms';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import {Address} from 'ngx-google-places-autocomplete/objects/address';


declare var google;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  errorform = '';
  @ViewChild('placesRef') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;
  lat: number = -33.785809;
  lng: number = 151.121195;
  options = {
    types: ['(cities)'],
    componentRestrictions: {country: 'es'}
  };

  constructor(private formBuilder: FormBuilder, private _loginService: LoginService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
  }

  register = false;
  advanceRegister = false;
  registerText = '¿Aún no estás registrado?';
  registerLink = 'Regístrate ahora';
  actionLink = 'Iniciar sesión';
  fullAddress = [];

  public handleAddressChange(address: Address) {


    this.lng = address.geometry.location.lng();
    this.lat = address.geometry.location.lat();
  }

  goRegister() {
    this.register = !this.register;
    if (this.register === false) {
      this.registerText = '¿Aún no estás registrado?';
      this.registerLink = 'Regístrate ahora';
      this.actionLink = 'Iniciar sesión';
    } else {
      this.registerText = '¿Ya registrado?';
      this.registerLink = 'Iniciar sesión';
      this.actionLink = 'Crear cuenta';
    }

  }


  loginAction() {
    if (this.register === true) {
      if (this.registerForm.controls['pass'].value === this.registerForm.controls['confpass'].value) {
        this.advanceRegister = true;
      } else {
        this.errorform = 'Las contraseñas no coinciden!';
      }
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this._loginService.sendRegister(JSON.stringify(this.registerForm.value)).subscribe(
        resul => {
          console.log(resul.body);
        }, error => {
          console.log(error);
        }
      );
    }
    alert('SUCCESS!\n\n' + JSON.stringify(this.registerForm.value));
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confpass: [''],
      nombre: ['', Validators.required],
      nombreusuario: ['', Validators.required],
      idlocalidad: ['1'],
      edad: ['', Validators.required],
      empresa: ['1'],
      nombre_empresa: ['Routelab'],
      telefono: ['', Validators.required],
      foto: ['/img.jpg'],
    });
  }


}



