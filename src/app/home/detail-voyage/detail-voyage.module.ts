import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailVoyagePageRoutingModule } from './detail-voyage-routing.module';

import { DetailVoyagePage } from './detail-voyage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailVoyagePageRoutingModule
  ],
  declarations: [DetailVoyagePage]
})
export class DetailVoyagePageModule {}
