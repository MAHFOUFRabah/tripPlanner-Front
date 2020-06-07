import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'succes-ajout-voyage/:codeVoyage',
    loadChildren: () => import('./succes-ajout-voyage/succes-ajout-voyage.module').then( m => m.SuccesAjoutVoyagePageModule)
  },
  {
    path: 'rejoindre-voyage',
    loadChildren: () => import('./rejoindre-voyage/rejoindre-voyage.module').then( m => m.RejoindreVoyagePageModule)
  },
  {
    path: 'detail-voyage/:idVoyage',
    loadChildren: () => import('./detail-voyage/detail-voyage.module').then( m => m.DetailVoyagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
