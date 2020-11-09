import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ApphomepagePage } from "./apphomepage.page";

const routes: Routes = [
  {
    path: "",
    component: ApphomepagePage,
    children: [
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApphomepagePageRoutingModule {}
