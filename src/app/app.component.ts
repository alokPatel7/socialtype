import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Login",
      url: "/landing/signup",
      icon: "log-in",
    },
    {
      title: "Inbox",
      url: "/folder/Inbox",
      icon: "mail",
    },
    {
      title: "Favorites",
      url: "/folder/Favorites",
      icon: "heart",
    },
    {
      title: "Archived",
      url: "/folder/Archived",
      icon: "archive",
    },
    {
      title: "Trash",
      url: "/folder/Trash",
      icon: "trash",
    },
    {
      title: "Spam",
      url: "/folder/Spam",
      icon: "warning",
    },
    {
      title: "Logout",
      url: "/folder/Spam",
      icon: "log-out",
    },
  ];
  public labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.router.navigate(["/user/timeline"]);
    }
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
