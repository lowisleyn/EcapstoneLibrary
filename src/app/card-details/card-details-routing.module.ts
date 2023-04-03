import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardDetailsPage } from './card-details.page';

const routes: Routes = [
  {
    path: '',
    component: CardDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardDetailsPageRoutingModule {}
