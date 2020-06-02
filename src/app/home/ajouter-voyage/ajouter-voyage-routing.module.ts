import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterVoyagePage } from './ajouter-voyage.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterVoyagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterVoyagePageRoutingModule {}
