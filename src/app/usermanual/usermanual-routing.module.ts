import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsermanualPage } from './usermanual.page';

const routes: Routes = [
  {
    path: '',
    component: UsermanualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsermanualPageRoutingModule {}
