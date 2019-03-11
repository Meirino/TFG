import { Component, OnInit } from "@angular/core";
import { DialogflowService } from "src/app/services/dialogflow.service";
import { Message } from "src/app/models/message";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-simple-chat",
  templateUrl: "./simple-chat.component.html",
  styleUrls: ["./simple-chat.component.scss"]
})
export class SimpleChatComponent implements OnInit {
  mensaje: string = "";
  mensajes = [];

  constructor(
    private dialog: DialogflowService,
    private userService: UserService
  ) {}

  talk() {
    this.mensajes.push(
      new Message(this.mensaje, false, this.userService.currentUser)
    );
    this.dialog
      .getResponse(this.mensaje)
      .subscribe(response =>
        this.mensajes.push(
          new Message(response, true, this.userService.botUser)
        )
      );
  }

  ngOnInit() {}
}
