import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-createpost",
  templateUrl: "./createpost.page.html",
  styleUrls: ["./createpost.page.scss"],
})
export class CreatepostPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  loadImageFromDevice(event) {
    console.log("loadImageFromDevice error");
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      // get the blob of the image:
      let blob: Blob = new Blob([new Uint8Array(reader.result as ArrayBuffer)]);
      // create blobURL, such that we could use it in an image element:
      let blobURL: string = URL.createObjectURL(blob);
    };

    reader.onerror = (error) => {
      //handle errors
      console.log("loadImageFromDevice error", error);
    };
  }
}
