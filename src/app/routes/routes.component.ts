import { Component, OnInit, Input } from '@angular/core';



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

  constructor() { }
  loadRoute() {
    this.loadRoutes = !this.loadRoutes;
  }
  ngOnInit() {
  }



  category = 'Categoría';
  categories =['Sol y playa', 'Deportivo', 'Naturaleza', 'De montaña', 'Histórico', 'Aventura', 'Rural', 'Científico'];



  assignBlack () {
    const element = document.getElementById('addBlack');
    element.classList.add('black');
  }
}
