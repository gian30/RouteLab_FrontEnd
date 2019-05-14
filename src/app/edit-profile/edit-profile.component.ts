import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [UserService]
})
export class EditProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public me: User = <User>JSON.parse(localStorage.getItem('currentUser'));

  constructor(public fb: FormBuilder, public _userService: UserService) {
    this.profileForm = this.fb.group({
      nombre: [this.me.nombre],
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
    console.log(JSON.stringify(this.profileForm.value));
    this._userService.sendForm(JSON.stringify(this.profileForm.value), 'edit').subscribe(
      resul => {
        console.log(resul.body);
      }, error => {
        console.log(error);
      }
    );
  }
}
