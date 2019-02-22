import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "fql-navbar",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class NavbarComponent implements OnInit {
  @Output() toggled = new EventEmitter<boolean>();
  toggle = false;

  constructor() {}

  ngOnInit() {
    this.toggle = false;
  }

  toggleSidebar() {
    this.toggled.emit(!this.toggle);
    this.toggle = !this.toggle;
  }
}
