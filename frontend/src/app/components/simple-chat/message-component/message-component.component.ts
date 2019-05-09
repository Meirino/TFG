import { Component, OnInit, Input, AfterViewChecked } from "@angular/core";
import { Message } from "src/app/models/message";

@Component({
  selector: "app-message-component",
  templateUrl: "./message-component.component.html",
  styleUrls: ["./message-component.component.scss"]
})
export class MessageComponentComponent implements OnInit, AfterViewChecked {
  @Input() mensaje: Message;
  container: HTMLElement;

  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.container = document.getElementById("message_row");
    this.container.scrollTop = this.container.scrollHeight;
  }
}
