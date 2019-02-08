import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from './_helpers/must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _loginService: LoginService) {
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
      this._loginService.sendRegister(JSON.stringify(this.registerForm.value)).subscribe(
        resul => {
          console.log(resul.body);
        }, error => {
          console.log(error);
        }
      );
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
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confpass: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(7)]]
    }, {
      validator: MustMatch('pass', 'confpass')
    });
  }

}
