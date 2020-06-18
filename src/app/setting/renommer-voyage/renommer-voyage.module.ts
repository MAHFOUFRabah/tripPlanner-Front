import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenommerVoyagePageRoutingModule } from './renommer-voyage-routing.module';

import { RenommerVoyagePage } from './renommer-voyage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenommerVoyagePageRoutingModule
  ],
  declarations: [RenommerVoyagePage]
})
export class RenommerVoyagePageModule {}
