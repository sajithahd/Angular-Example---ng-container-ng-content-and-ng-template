import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular-Example---ng-container-ng-content-and-ng-template";

  items: any[];
  displayItems: boolean;

  constructor() {
    this.displayItems = false;
    this.items = [
      { name: "sajitha" },
      { name: "hem" },
      { name: "ayaan" },
      { name: "hera" }
    ];
  }

  toggleItems(): void {
    this.displayItems != this.displayItems;
  }
}
