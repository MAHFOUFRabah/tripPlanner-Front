import { environment } from './../../environments/environment';
import { Plugins } from '@capacitor/core';
import { Voyage } from "./../models/voyage.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class VoyagesService {
  private _voyages = new BehaviorSubject<Voyage[]>([]);
   token : string;
   username: string ;
    

   get voyages() {
    return this._voyages.asObservable();
  }
  constructor(private http: HttpClient) {}
  
  fetchVoyages(username:string, token:string) {

      return this.http.get<Voyage[]>(
        `${environment.UrlVoyageBackEnd}/allTrips/${username}`,  { headers: { Authorization: token  } }
      ).pipe(tap(voyages =>{
          this._voyages.next(voyages);
      }))
    }

    ajouterVoyage(nomVoyage:string,username:string, token:string) {
        const voyageCree = new Voyage(username,null,null,null,nomVoyage);
        return this.http.post<Voyage>(
            `${environment.UrlVoyageBackEnd}/oneTrip`, voyageCree, { headers: { Authorization: token  } }
          )

    }
    rejoindreVoyage(codeVoyage: string,username:string,token:string){
      return this.http.post<Voyage>(
        `${environment.UrlVoyageBackEnd}/ajouterParticipant/`+username+'/'+codeVoyage,null , { headers: { Authorization: token  } }
      )

    }
    recupererIdAuth() {
      Plugins.Storage.get({ key: "authData" }).then(storedData => {
        const dataAuth = JSON.parse(storedData.value) as {
          token: string;
          userId: string;
        }
        this.token = dataAuth.token;
        this.username = dataAuth.userId;
  
      })
    }
  }


