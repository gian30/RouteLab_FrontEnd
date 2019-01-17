import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { StickyMenuComponent } from './sticky-menu/sticky-menu.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';
import { RoutesComponent } from './routes/routes.component';
import { FooterComponent } from './footer/footer.component';
import { RouteComponent } from './route/route.component';
import { ChatComponent } from './chat/chat.component';
import { NewRouteComponent } from './new-route/new-route.component';



@NgModule({
  declarations: [
    AppComponent,
    StickyMenuComponent,
    MainComponent,
    BannerComponent,
    RoutesComponent,
    FooterComponent,
    RouteComponent,
    ChatComponent,
    NewRouteComponent
  ],

  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
