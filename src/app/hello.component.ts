import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <div class="content-1">
      <ng-content select=".content-1"></ng-content>
    </div>

    <div class="content-2">
      <ng-content select=".content-2"></ng-content>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      .content-1 {
        background: red;
        padding: 20px;
      }

      .content-2 {
        background: green;
        padding: 20px;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}
