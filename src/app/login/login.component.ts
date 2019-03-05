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

import {
  SocialUser,
  AuthService,
  GoogleLoginProvider
} from 'ng4-social-login';


declare var google;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  registerFormTemp: FormGroup;
  registerForm: FormGroup;
  registerFormSecond: FormGroup;
  loginFormTemp: FormGroup;
  submitted = false;
  @ViewChild('placesRef') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;
  register = false;
  advanceRegister = false;
  registerText = '¿Aún no estás registrado?';
  registerLink = 'Regístrate ahora';
  actionLink = 'Iniciar sesión';
  fullAddress = {};
  login = {};
  copy = [];
  options = {
    types: ['(cities)'],
    componentRestrictions: {country: 'es'}
  };

  get f() {
    return this.registerForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private authService: AuthService
  ) {
  }

  /*Google Sign up*/
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userdata) => {
      this.socialSignIn(userdata);
    });
  }

  socialSignIn(userData) {
    if (userData['email'] !== '') {
      let user = {
        name: userData['name'],
        email: userData['email']
      };
      console.log(userData);
      this.registerForm.controls['email'].setValue(user.email);
      this.registerForm.controls['nombre'].setValue(user.name);
    }
  }

  signOut(): void {
    this.authService.signOut();
  }

  /*Google Maps API*/
  public handleAddressChange(address: Address) {
    this.fullAddress = {
      poblacion: address.address_components[0]['long_name'],
      pais: address.address_components[3]['long_name'],
      direccion: address.formatted_address,
      latitud: address.geometry.location.lat(),
      longitud: address.geometry.location.lng()
    };
  }


  goRegister() {
    this.submitted = false;
    this.register = !this.register;
    if (this.register === false) {
      this.registerForm = this.loginFormTemp;
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
    this.submitted = true;
    if (this.register === true) {
      this.registerForm = this.registerFormTemp;
      //delete this.registerForm.controls['confpass'];
      this.advanceRegister = true;
    } else {
      console.log(this.registerForm);
      console.log(this.registerForm.invalid);
      if (this.registerForm.invalid) {
        return;
      }

      this.login = {
        email: this.registerForm.controls['email'].value,
        pass: this.registerForm.controls['pass'].value
      };
      alert('SUCCESS!\n\n' + JSON.stringify(this.login));
      this._loginService.sendRegister(JSON.stringify(this.login), 'login').subscribe(
        resul => {
          console.log(resul.body);
        }, error => {
          alert('Usuario incorrecto!');
        }
      );
    }
  }

  onSubmit() {
    this.submitted = true;
    this.copy = this.registerForm.value;
    this.copy['localidad'] = this.fullAddress;
    alert('SUCCESS!\n\n' + JSON.stringify(this.copy));
    this._loginService.sendRegister(JSON.stringify(this.copy), 'registro').subscribe(
      resul => {
        console.log(resul.body);
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.registerFormTemp = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confpass: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.registerFormSecond = this.formBuilder.group({
      nombre: ['', Validators.required],
      nombreusuario: ['', Validators.required],
      edad: ['', Validators.required],
      empresa: ['1'],
      nombre_empresa: ['Routelab'],
      telefono: ['', Validators.required],
      foto: ['/img.jpg'],
    });

    this.loginFormTemp = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.registerForm = this.loginFormTemp;
  }


}



