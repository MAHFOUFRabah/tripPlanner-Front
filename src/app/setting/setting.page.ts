import { Voyage } from './../models/voyage.model';
import { VoyagesService } from './../services/voyage.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage   {
  voyages: Voyage[];
  isLoading = true;
  token: string;
  userId: string;

  constructor(private voyageService:VoyagesService,
    private alertCtrl:AlertController,
    private actionSheetCtrl:ActionSheetController,
    private ngZone: NgZone,
    private router: Router) { }

    ionViewWillEnter() {
    Plugins.Storage.get({ key: "authData" }).then(storedData => {
      const dataAuth = JSON.parse(storedData.value) as {
        token: string;
        userId: string;
      }
      this.token =dataAuth.token
      this.userId = dataAuth.userId
     
      this.voyageService.fetchVoyages(dataAuth.userId,dataAuth.token ).subscribe(
        (data) => {
          this.voyages = data;
          this.isLoading = false;
        },
        (error) => {
          this.showAlert(
            "Erreur de connexion",
            "La connexion au serveur n'a pas pu être etablie"
          );
          this.isLoading = false;
        }
      );

    })
  }
  private showAlert(header: string, message: string) {
    this.alertCtrl
      .create({
        header: header,
        message: message,
        buttons: ["Okay"],
      })
      .then((alertEl) => alertEl.present());
  }
  onEditerOuSupprimer(voyage: Voyage){
    this.actionSheetCtrl
    .create({
      header: "Choisir Votre Action",
      buttons: [
        
        {
          text: "Renommer le voyage ",
          icon: 'create',
          handler: () => {
            this.router.navigateByUrl(`/setting/renommer-voyage/${voyage.idVoyage}`)
          },
        },
        {
          text: "Supprimer l'article",
          icon: 'trash',
          handler: () => {
            this.supprimerLeVoyageCtrl(voyage, this.token);
            
          },
        },
        {
          text: "Annuler",
          role: "cancel",
          icon: 'close'
        },
      ],
    })
    .then((actionsheetEl) => {
      actionsheetEl.present();
    });
  }
  
  supprimerLeVoyageCtrl(voyage: Voyage, token: string){
    this.voyageService.suprimerUnVoyage(voyage.idVoyage, this.userId,token).subscribe(reponse => {
      this.ngZone.run(() => {
          this.voyageService.fetchVoyages(this.userId,this.token ).subscribe(
          (data) => {
            this.voyages = data
          },
          (error) => {
            this.showAlert(
              "Erreur de connexion",
              "La connexion au serveur n'a pas pu être etablie"
            );
            this.isLoading = false;
          }
        );
      });

    }, erreur => {
      console.log(erreur)
    })
  }
}
