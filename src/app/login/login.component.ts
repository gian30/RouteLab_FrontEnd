import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';

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
    const reg = JSON.parse(JSON.stringify(this.login));
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

  ngOnInit() {
  }

}
