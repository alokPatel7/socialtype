import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserhomepagePage } from './userhomepage.page';

const routes: Routes = [
  {
    path: '',
    component: UserhomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserhomepagePageRoutingModule {}
