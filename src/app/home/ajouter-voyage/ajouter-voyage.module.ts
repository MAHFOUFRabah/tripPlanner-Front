import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterVoyagePageRoutingModule } from './ajouter-voyage-routing.module';

import { AjouterVoyagePage } from './ajouter-voyage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterVoyagePageRoutingModule
  ],
  declarations: [AjouterVoyagePage]
})
export class AjouterVoyagePageModule {}
