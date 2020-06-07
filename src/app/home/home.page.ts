import { VoyagesService } from "./../services/voyage.service";
import { Voyage } from "./../models/voyage.model";
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AlertController, ActionSheetController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Plugins } from '@capacitor/core';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  voyages: Voyage[];
  isLoading = true;
  constructor(
    private voyageService: VoyagesService,
    private alertCtrl: AlertController,
    private route: Router,
    private actionSheetCtrl: ActionSheetController

  ) {}
  ionViewWillEnter() {
    Plugins.Storage.get({ key: "authData" }).then(storedData => {
      const dataAuth = JSON.parse(storedData.value) as {
        token: string;
        userId: string;
      }
     
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
  onAjouterOuRejoindreUnVoyage() {
    this.actionSheetCtrl
    .create({
      header: "Choisir Votre Action",
      buttons: [
        {
          text: "Ajouter un nouveau voyage",
          icon: 'add',
          handler: () => {
            this.route.navigate(["/ajouter-voyage"]);
          },
        },
        {
          text: "Rejoignre un voyage",
          icon: 'happy-outline',
          handler: () => {
            this.route.navigate(["/home/rejoindre-voyage"]);
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
  
}
