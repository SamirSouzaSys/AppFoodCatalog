import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratoDoDiaPageRoutingModule } from './prato-do-dia-routing.module';

import { PratoDoDiaPage } from './prato-do-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratoDoDiaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PratoDoDiaPage]
})
export class PratoDoDiaPageModule {}
