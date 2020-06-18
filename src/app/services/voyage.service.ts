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
        const voyageCree = new Voyage(null,null,null,nomVoyage);
        return this.http.post<Voyage>(
            `${environment.UrlVoyageBackEnd}/oneTrip/${username}`, voyageCree, { headers: { Authorization: token  } }
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
    suprimerUnVoyage(idVoyage: String,username:string, token: string){
      return this.http.delete<void>(
        `${environment.UrlVoyageBackEnd}/oneTrip/${username}/${idVoyage}`, { headers: { Authorization: token  } }
      )
    }
    renomerUnVoyage(idVoyage: String, nouveauNomDuVoyage: String, token: string){
      
      return this.http.put<Voyage>(
        `${environment.UrlVoyageBackEnd}/oneTrip/${idVoyage}/${nouveauNomDuVoyage}`, null, { headers: { Authorization: token  } }
      )
    }
    recupererUnVoyage(idVoyage: string, token: string) {
      return this.http.get<Voyage>(
        `${environment.UrlVoyageBackEnd}/oneTrip/${idVoyage}`,  { headers: { Authorization: token  } }
      )
    }

  }


