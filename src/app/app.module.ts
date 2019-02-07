import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {BannerComponent} from './banner/banner.component';
import {RoutesComponent} from './routes/routes.component';
import {FooterComponent} from './footer/footer.component';
import {RouteComponent} from './route/route.component';
import {ChatComponent} from './chat/chat.component';
import {NewRouteComponent} from './new-route/new-route.component';
import { LoginComponent } from './login/login.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { FollowersComponent } from './followers/followers.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {path: 'routes', component: RoutesComponent},
  {path: 'route', component: RouteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: BannerComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: MainComponent}
];

RouterModule.forRoot(routes,
  {
    scrollPositionRestoration: 'disabled',
    anchorScrolling: 'enabled'
  });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BannerComponent,
    RoutesComponent,
    FooterComponent,
    RouteComponent,
    ChatComponent,
    NewRouteComponent,
    LoginComponent,
    PersonalAreaComponent,
    FollowersComponent,
    GalleryComponent,
    ContactComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
