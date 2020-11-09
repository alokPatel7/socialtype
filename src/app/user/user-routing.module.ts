import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserPage } from "./user.page";

const routes: Routes = [
  {
    path: "",
    component: UserPage,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../pages/userhomepage/userhomepage.module").then(
            (m) => m.UserhomepagePageModule
          ),
      },

      {
        path: "timeline",
        loadChildren: () =>
          import("../pages/timeline/timeline.module").then(
            (m) => m.TimelinePageModule
          ),
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("../pages/notifications/notifications.module").then(
            (m) => m.NotificationsPageModule
          ),
      },
      {
        path: "message",
        loadChildren: () =>
          import("../pages/message/message.module").then(
            (m) => m.MessagePageModule
          ),
      },
      {
        path: "userprofile",
        loadChildren: () =>
          import("../pages/userprofile/userprofile.module").then(
            (m) => m.UserprofilePageModule
          ),
      },
      {
        path: "createpost",
        loadChildren: () =>
          import("../pages/createpost/createpost.module").then(
            (m) => m.CreatepostPageModule
          ),
      },
      {
        path: "**",
        loadChildren: () =>
          import("../folder/folder.module").then((m) => m.FolderPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
