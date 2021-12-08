import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonesDeletePage } from './pokemones-delete.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonesDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonesDeletePageRoutingModule {}
