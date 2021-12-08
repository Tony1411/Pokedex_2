import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonesEditPageRoutingModule } from './pokemones-edit-routing.module';

import { PokemonesEditPage } from './pokemones-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonesEditPage]
})
export class PokemonesEditPageModule {}
