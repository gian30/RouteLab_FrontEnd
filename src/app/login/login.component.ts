/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './_helpers/must-match.validator';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Router } from '@angular/router';

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
  registerForm: FormGroup;
  registerFormFirst: FormGroup;
  submitted = false;
  @ViewChild('placesRef') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;
  currentUser: User;
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
    componentRestrictions: { country: 'es' }
  };
  errormsg = '';

  get f() {
    return this.registerForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private authService: AuthService,
    private router: Router
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
      const user = {
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
      this.registerText = '¿Aún no estás registrado?';
      this.registerLink = 'Regístrate ahora';
      this.actionLink = 'Iniciar sesión';
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        pass: ['', [Validators.required, Validators.minLength(6)]]
      });
    } else {
      this.registerText = '¿Ya registrado?';
      this.registerLink = 'Iniciar sesión';
      this.actionLink = 'Crear cuenta';
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        pass: ['', [Validators.required, Validators.minLength(6)]],
        confpass: ['', [Validators.required, Validators.minLength(6)]]
      }, {
          validator: MustMatch('pass', 'confpass')
        });
    }
  }


  loginAction() {
    this.submitted = true;
    if (this.register === true) {
      if (this.registerForm.invalid) {
        console.log('here invalid');
        return;
      }
      if (this.advanceRegister === false) {
        console.log('here 1');
        delete this.registerForm.controls['confpass'];
        this.registerFormFirst = this.registerForm;
        this.advanceRegister = true;
        this.registerForm = this.formBuilder.group({
          nombre: ['', Validators.required],
          nombreusuario: ['', Validators.required],
          edad: ['', Validators.required],
          empresa: ['1'],
          nombre_empresa: ['Routelab'],
          telefono: [''],
          foto: ['/img.jpg'],
        });
      }
    } else {
      console.log('login');
      this.login = {
        email: this.registerForm.controls['email'].value,
        pass: this.registerForm.controls['pass'].value
      };
      this._loginService.sendRegister(JSON.stringify(this.login), 'login').subscribe(
        resul => {
          if (resul.body !== null) {
            const obj: User = JSON.parse(resul.body['data']);
            console.log(resul.body['data']);
            console.log(resul.body['data']['locality']);
            localStorage.setItem('currentUser', JSON.stringify(obj));
            localStorage.setItem('access_token', obj.token);
            this.router.navigate(['/user']);
          } else {
            this.errormsg = 'Usuario incorrecto!';
          }
        }, error => {
          alert('Usuario incorrecto!');
        }
      );
    }
  }

  onSubmit() {
    // Registro
    this.submitted = true;

    this.copy = this.registerForm.value;
    this.copy['email'] = this.registerFormFirst.controls['email'].value;
    this.copy['pass'] = this.registerFormFirst.controls['pass'].value;
    this.copy['localidad'] = this.fullAddress;
    console.log(JSON.stringify(this.copy));
    this._loginService.sendRegister(JSON.stringify(this.copy), 'registro').subscribe(
      resul => {
        if (resul.body !== null) {
          alert('Usuario registrado! Ya puedes iniciar sesíon usando tu correo electronico.');
          this.router.navigate(['']);
        }
      }, error => {
        console.log(error);
      }
    );
  }

  onChangeEmail() {
    console.log('changed!!!');
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
