import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  login = {
    'email': '',
    'pass': '',
    'confpass': ''
  };

  profileForm = new FormGroup({
    email:  new FormControl(''),
    pass:  new FormControl(''),
    confpass:  new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    age: new FormControl(''),
    phone: new FormControl(''),
  });


  constructor(private _loginService: LoginService) {
  }

  register = false;
  advanceRegister = false;
  registerText = '¿Aún no estás registrado?';
  registerLink = 'Regístrate ahora';
  actionLink = 'Iniciar sesión';

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
      this.advanceRegister = true;
      /*this._loginService.sendRegister(reg).subscribe(
        resul => {
          console.log(resul.body);
        }, error => {
          console.log(error);
        }
      );
      */

    }
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  ngOnInit() {
  }

}
