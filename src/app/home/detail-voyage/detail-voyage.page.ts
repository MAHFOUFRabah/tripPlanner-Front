import { ActionSheetController, AlertController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Article } from 'src/app/models/article.model';


@Component({
  selector: 'app-detail-voyage',
  templateUrl: './detail-voyage.page.html',
  styleUrls: ['./detail-voyage.page.scss'],
})
export class DetailVoyagePage implements OnInit {
   token: string;
   articles :Article[];
   isLoading =false;
   idVoyage : string;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private authService: AuthService,
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    public alertController: AlertController) { }

  ngOnInit() {
    Plugins.Storage.get({ key: "authData" }).then(storedData => {
      const dataAuth = JSON.parse(storedData.value) as {
        token: string;
        userId: string;
      }
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("idVoyage")) {
        this.navCtrl.navigateBack("/home");
        return;
      }
      this.idVoyage = paramMap.get("idVoyage");
    
    this.articleService.fetchArticlesDuVoyage(this.idVoyage,dataAuth.userId,dataAuth.token).subscribe(reponse => {
      this.articles = reponse;
      console.log(this.articles)
    })
  })
  })
}
onAjouterArticle(){
  this.router.navigateByUrl(`/home/detail-voyage/${this.idVoyage}/ajouter-article`);

}
onSupprimerFavoriArticle(idArticle:string){
  this.actionSheetCtrl
  .create({
    header: "Choisir Votre Action",
    buttons: [
      {
        text: "Je m'en occupe ",
        icon: 'checkmark',
        handler: () => {
          this.ajouterArticleAuxFavoris(idArticle)
        },
      },
      {
        text: "Supprimer l'article",
        icon: 'trash',
        handler: () => {
          this.supprimerArticle(idArticle)
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
async supprimerArticle(idArticle: string) {
  const alert = await  this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    message: 'This is an alert message.',
    buttons: [{
      text: "Supprimer l'article",
      handler: () => {
        this.supprimerArticleDeLaBD(idArticle)
      },
    },
    {
      text: "Annuler",
      role: "cancel",
    }]
  });

   alert.present();

}
supprimerArticleDeLaBD(idArticle: string) {
  
}
ajouterArticleAuxFavoris (idArticle) {

}

}
