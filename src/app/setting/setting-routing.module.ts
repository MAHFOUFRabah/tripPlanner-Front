import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPage } from './setting.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPage
  },
  {
    path: 'renommer-voyage/:idVoyage',
    loadChildren: () => import('./renommer-voyage/renommer-voyage.module').then( m => m.RenommerVoyagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPageRoutingModule {}
