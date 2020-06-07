import { ArticleService } from 'src/app/services/article.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.page.html',
  styleUrls: ['./ajouter-article.page.scss'],
})
export class AjouterArticlePage implements OnInit {

  constructor(private navCtrl: NavController,
    private articleService : ArticleService,
    private route: ActivatedRoute ) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm ){
    Plugins.Storage.get({ key: "authData" }).then(storedData => {
      const dataAuth = JSON.parse(storedData.value) as {
        token: string;
        userId: string;
      }
    if (!form.valid) {
      return;
    }
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("idVoyage")) {
        this.navCtrl.navigateBack("/home");
        return;
      }
    this.articleService.ajouterUnArticle(form.value.nomArticle,paramMap.get("idVoyage"),dataAuth.userId,dataAuth.token).subscribe(data => {
      this.navCtrl.back();
    },error =>{
      console.log(error)
    })
  })
})

  }
  onAnnuler(){
    this.navCtrl.back();
  }

}
