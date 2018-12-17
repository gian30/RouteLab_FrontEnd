import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StickyMenuComponent } from './sticky-menu/sticky-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StickyMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
