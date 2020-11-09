import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { WindowService } from "src/app/services/window.service";
import firebase from "firebase/app";
import "firebase/auth";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-verifyotp",
  templateUrl: "./verifyotp.page.html",
  styleUrls: ["./verifyotp.page.scss"],
})
export class VerifyotpPage implements OnInit {
  message = "";
  windowRef: any;
  OTPcode: any;

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

  VerifyOTP() {
    console.log(this.OTPcode);
    this.windowRef.confirmationResult
      .confirm(`${this.OTPcode}`)
      .then((result) => {
        this.router.navigate(["/user"]);
        console.log("done", result);
      })
      .catch((error) => {
        this.message = error.message;
        console.log("error", error);
      });
  }
}
