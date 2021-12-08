import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonesViewPageRoutingModule } from './pokemones-view-routing.module';

import { PokemonesViewPage } from './pokemones-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesViewPageRoutingModule
  ],
  declarations: [PokemonesViewPage]
})
export class PokemonesViewPageModule {}
