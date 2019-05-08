import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { stringify } from 'querystring';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import * as events from 'events';


@Component({
  selector: 'app-new-route-form',
  templateUrl: './new-route-form.component.html',
  styleUrls: ['./new-route-form.component.css'],
  providers: [PostService]
})
export class NewRouteFormComponent implements OnInit {
  public category = 'Categoría';
  public categories = ['Sol y playa', 'Deportivo', 'Naturaleza', 'De montaña', 'Histórico', 'Aventura', 'Rural', 'Científico'];


  constructor(public fb: FormBuilder, public _postService: PostService) {
  }

  public productForm: FormGroup;
  public fullAddress: {};
  public recomendations = [];
  public selectedFile: File;
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
      uploadF: [],


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
  /*
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
  */
  // -----------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    /*
    this.http.post('', fd,
      {
        reportProgress: true,
        observe: (events)
      },
    ).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress: ' + Math.round(event.loaded / event.total) * 100 + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      }
    );
    */
  }


  onSubmit() {
    /*
     const payload = new FormData();
     payload.append('name', this.name);
     payload.append('image', this.selectedFile, this.selectedFile.name);

     this.http
       .post(``,
         payload, {
           headers: {
             'Content-Type': 'multipart/form-data'
           }
         }
       ).subscribe((data: any) => {
       this.resData = data;
       console.log(this.resData);
     });
  
}*/
  }

}

