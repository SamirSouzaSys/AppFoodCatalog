import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratoDoDiaPage } from './prato-do-dia.page';

const routes: Routes = [
  {
    path: '',
    component: PratoDoDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratoDoDiaPageRoutingModule {}
