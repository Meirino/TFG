import { Component, OnInit } from "@angular/core";
import { DialogflowService } from "src/app/services/dialogflow.service";
import { Message } from "src/app/models/message";

@Component({
  selector: "app-simple-chat",
  templateUrl: "./simple-chat.component.html",
  styleUrls: ["./simple-chat.component.scss"]
})
export class SimpleChatComponent implements OnInit {
  mensaje: string = "";
  mensajes = [];

  constructor(private dialog: DialogflowService) {}

  talk() {
    this.mensajes.push(new Message(this.mensaje, false));
    this.dialog
      .getResponse(this.mensaje)
      .subscribe(response => this.mensajes.push(new Message(response, true)));
  }

  ngOnInit() {}
}
