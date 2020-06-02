import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesAjoutVoyagePageRoutingModule } from './succes-ajout-voyage-routing.module';

import { SuccesAjoutVoyagePage } from './succes-ajout-voyage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesAjoutVoyagePageRoutingModule
  ],
  declarations: [SuccesAjoutVoyagePage]
})
export class SuccesAjoutVoyagePageModule {}
