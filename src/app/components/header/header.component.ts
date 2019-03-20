import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "bot-navbar",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}
}
