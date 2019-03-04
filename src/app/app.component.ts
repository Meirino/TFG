import { Component } from "@angular/core";
import { DialogflowService } from "./services/dialogflow.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "TFG-Angular";

  constructor(private dialog: DialogflowService) {}

  talk(texto: string = "Hola mundo") {
    this.dialog.getResponse(texto).subscribe(response => console.log(response));
  }
}
