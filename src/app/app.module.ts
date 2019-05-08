import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { RoutesComponent } from './routes/routes.component';
import { FooterComponent } from './footer/footer.component';
import { RouteComponent } from './route/route.component';
import { ChatComponent } from './chat/chat.component';
import { NewRouteComponent } from './new-route/new-route.component';
import { LoginComponent } from './login/login.component';
import { FollowersComponent } from './followers/followers.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { TermsComponent } from './terms/terms.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'ng4-social-login';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { NewRouteFormComponent } from './new-route-form/new-route-form.component';

const CONFIG = new AuthServiceConfig([

  // LOGIN
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('307596815036-s7ju0ki261cec6a5d1jalq1lef5u7mbk.apps.googleusercontent.com')
  }
], false);

export function provideConfig() {
  return CONFIG;
}

@Injectable()
export class AuthGuard implements CanActivate {

  base_url: string;

  constructor(private router: Router
    , private authService: LoginService) { }

  canActivate() {
    // Check to see if a user has a valid token
    if (this.authService.isAuthenticated()) {
      // If they do, return true and allow the user to load app
      return true;
    }
    // If not, they redirect them to the login page
    this.router.navigate(['/login']);
    return false;
  }

}

const routes: Routes = [
  { path: 'routes', component: RoutesComponent },
  { path: 'route/:id', component: RouteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', canActivate: [AuthGuard], component: UserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'main', component: MainComponent },
  { path: 'new-route', component: NewRouteComponent },
  { path: '', component: MainComponent }
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
    UserComponent,
    RoutesComponent,
    FooterComponent,
    RouteComponent,
    ChatComponent,
    NewRouteComponent,
    LoginComponent,
    FollowersComponent,
    GalleryComponent,
    ContactComponent,
    EditProfileComponent,
    TermsComponent,
    UploadPhotoComponent,
    NewRouteFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      // GOOLGE
      apiKey: 'AIzaSyBQwgG1zHjVXd6omQVAccKdv9skMCPg3-E'
    }),
    AgmDirectionModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, AuthGuard, LoginService],
  bootstrap: [AppComponent],

})
export class AppModule {
}
