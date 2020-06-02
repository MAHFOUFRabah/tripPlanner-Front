import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejoindreVoyagePage } from './rejoindre-voyage.page';

const routes: Routes = [
  {
    path: '',
    component: RejoindreVoyagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejoindreVoyagePageRoutingModule {}
