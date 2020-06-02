import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccesAjoutVoyagePage } from './succes-ajout-voyage.page';

const routes: Routes = [
  {
    path: '',
    component: SuccesAjoutVoyagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccesAjoutVoyagePageRoutingModule {}
