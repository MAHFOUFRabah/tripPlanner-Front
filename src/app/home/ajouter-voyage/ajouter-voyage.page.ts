import { VoyagesService } from './../../services/voyage.service';
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

@Component({
  selector: "app-ajouter-voyage",
  templateUrl: "./ajouter-voyage.page.html",
  styleUrls: ["./ajouter-voyage.page.scss"],
})
export class AjouterVoyagePage implements OnInit {
  constructor(private router: Router, private voyageService:VoyagesService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
if (!form.valid) {
      return;
    }
    Plugins.Storage.get({ key: "authData" }).then(storedData => {
      const dataAuth = JSON.parse(storedData.value) as {
        token: string;
        userId: string;
      }
    const nomVoyage = form.value.nomVoyage;
    this.voyageService.ajouterVoyage(nomVoyage, dataAuth.userId,dataAuth.token).subscribe( data => {
      this.router.navigate(["/home/succes-ajout-voyage/"+data.codeBarre]);
    })
  })
    
  }
}
