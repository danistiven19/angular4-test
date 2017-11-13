import { Component } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'

})
export class LoginComponent {
  private email: string;
  private password: string;

  constructor(private authenticationService: AuthenticationService) {
  }

  onLogin() {
      this.authenticationService.login(this.email, this.password);
  }
}
