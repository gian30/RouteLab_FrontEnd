import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../models/posts';


@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {



  constructor() {
  }
  private ROUTE_SAMPLE = ('../../assets/img/sample_route.png');
  private LOCATION = ('../../assets/icons/location.png');
  private STAR = ('../../assets/icons/star.png');
  private TIMER = ('../../assets/icons/timer.png');
  loadRoutes = true;
  @Input() titleRoutes: string;
  routes = [
    new Post(1, 'Ruta', 'Lorem ipsum dolor sit amet, in eos vivendo singulis. Eum illum gloriatur neglegentur ea. Te falli putent cum, probo ferri luptatum vix et.', 'ruta', 1),
    new Post(2, 'Ruta2', 'Vero dolorem iracundia at eum, movet mentitum atomorum ea qui, nostrum expetenda ne quo.', 'ruta', 2),
    new Post(3, 'Ruta3', 'Eum illum gloriatur neglegentur ea. ', 'ruta', 3),
    new Post(4, 'Ruta4', 'Te falli putent cum, probo ferri luptatum vix et.', 'ruta', 1),
    new Post(5, 'Ruta', 'Lorem ipsum dolor sit amet, in eos vivendo singulis. Eum illum gloriatur neglegentur ea. Te falli putent cum, probo ferri luptatum vix et.', 'ruta', 1),
    new Post(6, 'Ruta2', 'Vero dolorem iracundia at eum, movet mentitum atomorum ea qui, nostrum expetenda ne quo.', 'ruta', 2),
    new Post(7, 'Ruta3', 'Eum illum gloriatur neglegentur ea. ', 'ruta', 3),
    new Post(8, 'Ruta4', 'Te falli putent cum, probo ferri luptatum vix et.', 'ruta', 1),
    new Post(9, 'Ruta', 'Lorem ipsum dolor sit amet, in eos vivendo singulis. Eum illum gloriatur neglegentur ea. Te falli putent cum, probo ferri luptatum vix et.', 'ruta', 1),
    new Post(10, 'Ruta2', 'Vero dolorem iracundia at eum, movet mentitum atomorum ea qui, nostrum expetenda ne quo.', 'ruta', 2),
    new Post(11, 'Ruta3', 'Eum illum gloriatur neglegentur ea. ', 'ruta', 3),
    new Post(12, 'Ruta4', 'Te falli putent cum, probo ferri luptatum vix et.', 'ruta', 1)
  ];


  category = 'Categoría';
  categories = ['Sol y playa', 'Deportivo', 'Naturaleza', 'De montaña', 'Histórico', 'Aventura', 'Rural', 'Científico'];

  loadRoute() {
    this.loadRoutes = !this.loadRoutes;
  }

  ngOnInit() {
  }


  assignBlack() {
    const element = document.getElementById('addBlack');
    element.classList.add('black');
  }
}
