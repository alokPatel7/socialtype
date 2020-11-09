import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingPage } from "./landing.page";

const routes: Routes = [
  {
    path: "",
    component: LandingPage,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../pages/apphomepage/apphomepage.module").then(
            (m) => m.ApphomepagePageModule
          ),
      },
      {
        path: "signup",
        loadChildren: () =>
          import("../pages/signup/signup.module").then(
            (m) => m.SignupPageModule
          ),
      },
      {
        path: "verifyotp",
        loadChildren: () =>
          import("../pages/verifyotp/verifyotp.module").then(
            (m) => m.VerifyotpPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
