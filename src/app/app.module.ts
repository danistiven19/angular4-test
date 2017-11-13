import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { PlacesComponent } from './places/places.component';
import { LoginComponent } from './login/login.component';

import { PlacesService } from './services/places.service';
import { AuthenticationService } from './services/authentication.service';
import { MyGuardService } from './services/my-guard.service';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'detalle/:id', component: DetailComponent, canActivate: [MyGuardService] },
  { path: 'lugares', component: PlacesComponent, canActivate: [MyGuardService] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    PlacesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDosJC_b9L-yDTMnD8V33EocatEaV4cEMk'
    }),
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [PlacesService, AuthenticationService, MyGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
