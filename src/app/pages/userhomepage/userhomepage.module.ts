import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserhomepagePageRoutingModule } from './userhomepage-routing.module';

import { UserhomepagePage } from './userhomepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserhomepagePageRoutingModule
  ],
  declarations: [UserhomepagePage]
})
export class UserhomepagePageModule {}
