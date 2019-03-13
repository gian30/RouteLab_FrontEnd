import {Component, OnInit, Input} from '@angular/core';
import {Post} from "../models/posts";


@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  private ROUTE_SAMPLE = ('../../assets/img/sample_route.png');
  private LOCATION = ('../../assets/icons/location.png');
  private STAR = ('../../assets/icons/star.png');
  private TIMER = ('../../assets/icons/timer.png');
  loadRoutes = true;
  @Input() titleRoutes: string;



  constructor() {
  }

  routes = [
    new Post(1, "Ruta1", "Lorem ipsum dolor sit amet, in eos vivendo singulis. Eum illum gloriatur neglegentur ea. Te falli putent cum, probo ferri luptatum vix et.", "ruta", 1),
    new Post(2, "Ruta2", "Vero dolvet mentitum atomrum ea quero dolorem iracundia at eum, movet mentitum atomorum ea quero dolorem iracundia at eum, movet mentitum atomorum ea qui, nostrum expetenda ne quo.", "ruta", 2),
    new Post(3, "Ruta3", "Eum illum gloriatur neglegentur ea.njnjnjnjnjnVero dolorem iracundia at eum, movet mentitum atomorum ea quero dolorem iracundia at eum, movet mentitum atomorum ea quero dolorem ", "ruta", 3),
    new Post(4, "Ruta4", "Te Lorem ipsum dolor sit amet, in eos vivendo singulis. Eum illum gloriaturfalli putent cum, probo ferri ipsum dolor sit amet, in eos vivendo singulis.  luptatuputent cum, probo ferri luptatuputent cum, probo ferri luptatum vix et.nn", "ruta", 1),
    new Post(5, "Ruta5", "Lorem ipsum dolor sit amet, in eos vivendo singulis. Eum illum gloriatur neglegentur ea. Te falli putent cum, probo ferri luptatum vix et.", "ruta", 1),
    new Post(6, "Ruta6", "Vero dolorem  ipsum dolor sit amet, nostrum expetenda n, in eos vivendo singulis. mentitum atomorum ea qui, nostrum expetenda ne quo.", "ruta", 2),
    new Post(7, "Ruta7", "Eum illum Lorem ipsum dolor sit amet, in eos vivendo singulis. Eum illum gloriaturgloriatur neglegentur ea. I putent cum, probo ferri ipsum dolor sit amet, in eos vivendo singulis.", "ruta", 3),
    new Post(8, "Ruta8", "Te falli putent cum, probo ferri luptatum vix et.", "ruta", 1),
    new Post(9, "Ruta9", "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, in eos vivendo singulis. Eum illum gloriaturLorem ipsum dolor sit amet, in eos vivendo singulis. Eum illum gloriaturin eos vivendo singulis. Eum illum gloriatur neglegentur ea. Te falli putent cum, probo ferri luptatum vix et.", "ruta", 1),
    new Post(10, "Ruta10", "Vero dolorem iracundia at eum, movet mentitum atomorum ea qui, nostrum expetenda ne quo. , probo ferri luptatum vix et.", "ruta", 2),
    new Post(11, "Ruta11", "Eum illum gloriatur neglegentur ea. , probo ferri luptatum vix et., probo ferri luptatum vix et.", "ruta", 3),
    new Post(12, "Ruta12", "Te falli Lorem ipsum dolor sit amet, in eos vivendo singulis. Eum illum gloriaturputent cum, probo ferri  putent cum, probo ferri luptatum vix et.", "ruta", 1)
  ];

  loadRoute() {
    this.loadRoutes = !this.loadRoutes;
  }

  ngOnInit() {
  }


  category = 'Categoría';
  categories = ['Sol y playa', 'Deportivo', 'Naturaleza', 'De montaña', 'Histórico', 'Aventura', 'Rural', 'Científico'];


  assignBlack() {
    const element = document.getElementById('addBlack');
    element.classList.add('black');
  }
}
