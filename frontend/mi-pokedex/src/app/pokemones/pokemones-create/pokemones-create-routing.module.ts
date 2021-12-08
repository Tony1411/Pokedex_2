import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonesCreatePage } from './pokemones-create.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonesCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonesCreatePageRoutingModule {}
