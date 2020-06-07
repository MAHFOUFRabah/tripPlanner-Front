import { UserRegister } from './../models/userRegister.model';
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
  register(userRegister: UserRegister) {
    return this.http.post(
      'http://localhost:8989/register',{'username':userRegister.username,'password':userRegister.password, 'confirmedPassword': userRegister.confirmedPassword},{observe: 'response'}
    )

  }

  authenticate(usename: string, password: string){
    return this.http.post(
      'http://localhost:8989/login',{'username':usename,'password':password},{observe: 'response'}
    )


  }
  login(){
    this._userIsAuthenticated = true;
  }
  logout() {
    Plugins.Storage.remove({ key: "authData" });
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
  ajouterUserBackEnd(username: String, idFonctionnelUser: string ){
    return this.http.post(
      'http://localhost:9090/ajouterUser',{'username':username, 'idFonctionnelUser':idFonctionnelUser},{observe: 'response'}
    )
  }
  


  constructor(private http: HttpClient) { }
}
