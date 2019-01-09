import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StickyMenuComponent } from './sticky-menu/sticky-menu.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';
import { RoutesComponent } from './routes/routes.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    StickyMenuComponent,
    MainComponent,
    BannerComponent,
    RoutesComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
