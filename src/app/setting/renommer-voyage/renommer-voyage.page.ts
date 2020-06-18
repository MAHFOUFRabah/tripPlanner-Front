import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { VoyagesService } from 'src/app/services/voyage.service';
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-renommer-voyage',
  templateUrl: './renommer-voyage.page.html',
  styleUrls: ['./renommer-voyage.page.scss'],
})
export class RenommerVoyagePage implements OnInit {
  idVoyage: string;

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private voyageService:VoyagesService,
    private router: Router,
    private ngZone: NgZone,) {} 

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("idVoyage")) {
        this.navCtrl.navigateBack("/setting");
        return;
      }
   this.idVoyage = paramMap.get("idVoyage")
    })
  }
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
        this.voyageService.renomerUnVoyage(this.idVoyage,nomVoyage,dataAuth.token).subscribe( data => {
         
            this.router.navigateByUrl("/setting");
          
        })
      })
        
      }

}
