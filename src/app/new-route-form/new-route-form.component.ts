import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';
import {stringify} from 'querystring';

@Component({
  selector: 'app-new-route-form',
  templateUrl: './new-route-form.component.html',
  styleUrls: ['./new-route-form.component.css']
})
export class NewRouteFormComponent implements OnInit {
  public category = 'Categoría';
  public categories = ['Sol y playa', 'Deportivo', 'Naturaleza', 'De montaña', 'Histórico', 'Aventura', 'Rural', 'Científico'];


  constructor(public fb: FormBuilder) {
  }

  public message = 'Título necesario.';


  productForm: FormGroup;

  ngOnInit() {
    /* Initiate the form structure */
    this.productForm = this.fb.group({
      origen: [],
      destino: [],
      select: [],


    });

    /* get sellingPoints() {
    return this.productForm.get('selling_points') as FormArray;
  }
}
*/
    // asignBlack() cambia el color de 'categoria' una vez seleccionda una opcion

  }
  assignBlack() {
    const element = document.getElementById('addBlack');
    element.classList.add('black');
  }
}
