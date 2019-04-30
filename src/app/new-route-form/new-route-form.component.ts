import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';
import {stringify} from 'querystring';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';


@Component({
  selector: 'app-new-route-form',
  templateUrl: './new-route-form.component.html',
  styleUrls: ['./new-route-form.component.css'],
  providers: [PostService]
})
export class NewRouteFormComponent implements OnInit {
  recomendation = 'Recomendaciones';
  recomendations = ['Ropa de abrigo', 'Calzado cómodo', 'Agua', 'Comida', 'Ropa de baño'];
  fullAddress = {};
  private id = this.route.snapshot.paramMap.get('id');

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private _postService: PostService) {
  }

  // public message = 'Título necesario.';


  productForm: FormGroup;




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
  ngOnInit() {
    /* Initiate the form structure */
    this.productForm = this.fb.group({
      origen: [],
      destino: [],
      select: [],
      description: [],



    });

    /* get sellingPoints() {
    return this.productForm.get('selling_points') as FormArray;
  }
}
*/
    // asignBlack() cambia el color de 'categoria' una vez seleccionda una opcion

  }
   uploadRoute() {
    console.log(this.productForm);
  }

  assignBlack() {
    const element = document.getElementById('addBlack');
    element.classList.add('black');
  }
  loadRecomendaciones() {
    this._postService.getRecomendacion(this.id).subscribe(
      resul => {
        if (resul.body !== null) {
          this.recomendations = resul.body['data'];
          console.log(this.recomendations);
        }
      }, error => {
        console.log(error);

      }
    );
  }
}
