import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonesViewPage } from './pokemones-view.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonesViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonesViewPageRoutingModule {}
