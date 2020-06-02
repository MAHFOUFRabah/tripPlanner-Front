import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejoindreVoyagePageRoutingModule } from './rejoindre-voyage-routing.module';

import { RejoindreVoyagePage } from './rejoindre-voyage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejoindreVoyagePageRoutingModule
  ],
  declarations: [RejoindreVoyagePage]
})
export class RejoindreVoyagePageModule {}
