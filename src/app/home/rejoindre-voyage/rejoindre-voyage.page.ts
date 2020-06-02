import { VoyagesService } from './../../services/voyage.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-rejoindre-voyage',
  templateUrl: './rejoindre-voyage.page.html',
  styleUrls: ['./rejoindre-voyage.page.scss'],
})
export class RejoindreVoyagePage implements OnInit {

  constructor(private voyageService: VoyagesService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
          return;
        }
        const codeVoyage = form.value.codeVoyage;

        Plugins.Storage.get({ key: "authData" }).then(storedData => {
          const dataAuth = JSON.parse(storedData.value) as {
            token: string;
            userId: string;
          }
        this.voyageService.rejoindreVoyage(codeVoyage,dataAuth.userId,dataAuth.token).subscribe(data => {

        },error =>{
          console.log(error)

        })
      })


  }

}
