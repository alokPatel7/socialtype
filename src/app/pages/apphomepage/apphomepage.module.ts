import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApphomepagePageRoutingModule } from './apphomepage-routing.module';

import { ApphomepagePage } from './apphomepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApphomepagePageRoutingModule
  ],
  declarations: [ApphomepagePage]
})
export class ApphomepagePageModule {}
