import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private oauthService: OAuthService) { }

  login(username: string, password: string): boolean {
    /*if (username == 'test' && password == 'test') {
      sessionStorage.setItem('login', 'true');
      return true;
    }
    return false;*/

    this.oauthService.initCodeFlow(); // to login of id provider
    return false; // don't care about return value here (because we navigate away from login page anyway)
  }

  isLoggedIn() {
    //return sessionStorage.getItem('login');

    return this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken();
  }


}
