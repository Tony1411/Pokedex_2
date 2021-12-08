import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonesEditPage } from './pokemones-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonesEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonesEditPageRoutingModule {}
