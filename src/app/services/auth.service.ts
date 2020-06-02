import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from "rxjs/operators";
import { Plugins } from "@capacitor/core";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated =false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  register()

  authenticate(usename: string, password: string){
    return this.http.post(
      'http://localhost:8989/login',{'username':usename,'password':password},{observe: 'response'}
    )


  }
  login(){
    this._userIsAuthenticated = true;
  }
  logout() {
    this._userIsAuthenticated = false;
  }
   sauvegarderAuthData(
    userId: string,
    token: string,
    
  ) {
    const data = JSON.stringify({
      userId: userId,
      token: token,
    });
    Plugins.Storage.set({ key: "authData", value: data });
  }
  


  constructor(private http: HttpClient) { }
}
