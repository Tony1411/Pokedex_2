import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonesDeletePageRoutingModule } from './pokemones-delete-routing.module';

import { PokemonesDeletePage } from './pokemones-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesDeletePageRoutingModule
  ],
  declarations: [PokemonesDeletePage]
})
export class PokemonesDeletePageModule {}
