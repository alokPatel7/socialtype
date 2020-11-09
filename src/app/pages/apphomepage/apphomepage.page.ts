import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: "app-apphomepage",
  templateUrl: "./apphomepage.page.html",
  styleUrls: ["./apphomepage.page.scss"],
})
export class ApphomepagePage implements OnInit {
  showSplash: boolean = false;

  constructor() {}

  ngOnInit() {
    this.showSplash = true;
    timer(4000).subscribe(() => (this.showSplash = false));
  }
}
