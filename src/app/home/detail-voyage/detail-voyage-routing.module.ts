import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailVoyagePage } from './detail-voyage.page';

const routes: Routes = [
  {
    path: '',
    component: DetailVoyagePage
  },
  {
    path: 'ajouter-article',
    loadChildren: () => import('./ajouter-article/ajouter-article.module').then( m => m.AjouterArticlePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailVoyagePageRoutingModule {}
