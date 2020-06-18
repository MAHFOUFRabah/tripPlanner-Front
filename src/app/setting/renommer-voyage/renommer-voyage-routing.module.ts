import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenommerVoyagePage } from './renommer-voyage.page';

const routes: Routes = [
  {
    path: '',
    component: RenommerVoyagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenommerVoyagePageRoutingModule {}
