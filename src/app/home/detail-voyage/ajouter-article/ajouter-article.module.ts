import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterArticlePageRoutingModule } from './ajouter-article-routing.module';

import { AjouterArticlePage } from './ajouter-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterArticlePageRoutingModule
  ],
  declarations: [AjouterArticlePage]
})
export class AjouterArticlePageModule {}
