import { Component, OnInit } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import firebase from "firebase/app";
import "firebase/auth";
import { WindowService } from "src/app/services/window.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  message = "";
  windowRef: any;
  phoneNumber: any;
  myName: string;

  constructor(
    private win: WindowService,
    private afu: AngularFireAuth,
    private router: Router
  ) {
    this.windowRef = this.win.windowRef;
  }
  ngOnInit() {
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebaseConfig);
    }
  }

  ngAfterViewInit(): void {
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // ...
        },
        "expired-callback"() {
          // ...
        },
      }
    );
    // this.windowRef.recaptchaVerifier.render();
    this.windowRef.recaptchaVerifier.render().then( (widgetId)=> {
      this.windowRef.recaptchaWidgetId = widgetId;
    });
  }

  sendlogincode(): any {
    console.log(this.phoneNumber);
    const appVerifier = this.windowRef.recaptchaVerifier;
    this.afu
      .signInWithPhoneNumber(`+91${this.phoneNumber}`, appVerifier)
      .then((Result: any) => {
        this.windowRef.confirmationResult = Result;
        this.router.navigate(["/landing/verifyotp"]);
        console.log("result", Result);
      })
      .catch((error) => {
        this.message = error.message;
        console.log("error", error);
      });
  }
}
