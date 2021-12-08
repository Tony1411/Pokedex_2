import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonesCreatePageRoutingModule } from './pokemones-create-routing.module';

import { PokemonesCreatePage } from './pokemones-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonesCreatePage]
})
export class PokemonesCreatePageModule {}
