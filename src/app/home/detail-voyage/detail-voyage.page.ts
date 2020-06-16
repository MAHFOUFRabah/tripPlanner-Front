import { ActionSheetController, AlertController } from "@ionic/angular";
import { Component, OnInit, NgZone } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Plugins } from "@capacitor/core";
import { Article } from "src/app/models/article.model";
import { Clipboard } from "@ionic-native/clipboard/ngx";

@Component({
  selector: "app-detail-voyage",
  templateUrl: "./detail-voyage.page.html",
  styleUrls: ["./detail-voyage.page.scss"],
})
export class DetailVoyagePage implements OnInit {
  token: string;
  articles: Article[];
  isLoading = false;
  idVoyage: string;
  userId: string;

  constructor(
    private clipboard: Clipboard,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    public alertController: AlertController,
    private ngZone: NgZone,

    
  ) {}

  ngOnInit() {
    this.chargerListItem();
  }
  onAjouterArticle() {
    this.actionSheetCtrl
      .create({
        header: "Choisir Votre Action",
        buttons: [
          {
            text: "Copier le code du voyage ",
            icon: "checkmark",
            handler: () => {
              this.clipboard.copy('Hello world').then(rs => {
                alert(rs);
              }).catch(error => {
                alert(error);
              })

              
            },
          },
          {
            text: "Ajouter un article",
            icon: "trash",
            handler: () => {
              this.router.navigateByUrl(
                `/home/detail-voyage/${this.idVoyage}/ajouter-article`
              );
            },
          },
          {
            text: "Annuler",
            role: "cancel",
            icon: "close",
          },
        ],
      })
      .then((actionsheetEl) => {
        actionsheetEl.present();
      });
  }
  onAjouterOuSupprimerDesFavori(article: Article) {
    if (article.appartientA === this.userId) {
      this.onSupprimerFavoriOuSupprimerArticle(article.idArticle);
    } else {
      this.onAjouterFavoriOuSupprimerArticle(article.idArticle);
    }
  }
  onAjouterFavoriOuSupprimerArticle(idArticle: string) {
    this.actionSheetCtrl
      .create({
        header: "Choisir Votre Action",
        buttons: [
          {
            text: "Je m'en occupe ",
            icon: "checkmark",
            handler: () => {
              this.ajouterArticleAuxFavoris(idArticle);
            },
          },
          {
            text: "Supprimer l'article",
            icon: "trash",
            handler: () => {
              this.supprimerArticle(idArticle);
            },
          },
          {
            text: "Annuler",
            role: "cancel",
            icon: "close",
          },
        ],
      })
      .then((actionsheetEl) => {
        actionsheetEl.present();
      });
  }

  onSupprimerFavoriOuSupprimerArticle(idArticle: string) {
    this.actionSheetCtrl
      .create({
        header: "Choisir Votre Action",
        buttons: [
          {
            text: "Finalement, Je ne peux pas le faire ",
            icon: "remove-circle",
            handler: () => {
              this.supprimerArticleDesFavoris(idArticle);
            },
          },
          {
            text: "Supprimer l'article",
            icon: "trash",
            handler: () => {
              this.supprimerArticle(idArticle);
            },
          },
          {
            text: "Annuler",
            role: "cancel",
            icon: "close",
          },
        ],
      })
      .then((actionsheetEl) => {
        actionsheetEl.present();
      });
  }
  async supprimerArticle(idArticle: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      message: "This is an alert message.",
      buttons: [
        {
          text: "Supprimer l'article",
          handler: () => {
            this.supprimerArticleDeLaBD(idArticle);
          },
        },
        {
          text: "Annuler",
          role: "cancel",
        },
      ],
    });

    alert.present();
  }
  supprimerArticleDesFavoris(idArticle: string) {
    this.articleService
      .ajouterUnArticleAuFavorisDb(idArticle, null, this.token)
      .subscribe(
        (reponse) => {
          this.ngZone.run(() => {
            this.chargerListItem();
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
  supprimerArticleDeLaBD(idArticle: string) {
    Plugins.Storage.get({ key: "authData" }).then((storedData) => {
      const dataAuth = JSON.parse(storedData.value) as {
        token: string;
        userId: string;
      };
      this.articleService
        .supprimerUnArticle(idArticle, dataAuth.token)
        .subscribe(
          (reponse) => {
            this.ngZone.run(() => {
              this.chargerListItem();
            });
          },
          (error) => {}
        );
    });
  }
  ajouterArticleAuxFavoris(idArticle: string) {
    this.articleService
      .ajouterUnArticleAuFavorisDb(idArticle, this.userId, this.token)
      .subscribe(
        (reponse) => {
          this.ngZone.run(() => {
            this.chargerListItem();
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  doRefresh(event) {
    this.articleService
      .fetchArticlesDuVoyage(this.idVoyage, this.userId, this.token)
      .subscribe((reponse) => {
        this.articles = reponse;
      });
  }
  chargerListItem() {
    Plugins.Storage.get({ key: "authData" }).then((storedData) => {
      const dataAuth = JSON.parse(storedData.value) as {
        token: string;
        userId: string;
      };
      this.route.paramMap.subscribe((paramMap) => {
        if (!paramMap.has("idVoyage")) {
          this.navCtrl.navigateBack("/home");
          return;
        }
        this.idVoyage = paramMap.get("idVoyage");
        this.token = dataAuth.token;
        this.userId = dataAuth.userId;
        this.articleService
          .fetchArticlesDuVoyage(this.idVoyage, dataAuth.userId, dataAuth.token)
          .subscribe((reponse) => {
            this.articles = reponse;
          });
      });
    });
  }
}
