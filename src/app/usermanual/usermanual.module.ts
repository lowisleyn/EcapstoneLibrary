import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsermanualPageRoutingModule } from './usermanual-routing.module';

import { UsermanualPage } from './usermanual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsermanualPageRoutingModule
  ],
  declarations: [UsermanualPage]
})
export class UsermanualPageModule {}
