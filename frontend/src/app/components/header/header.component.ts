import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {AuthService, loginRes} from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    public userService: UserService,
    public authService: AuthService,
    public router: Router,
  ) {}

  ngOnInit() {}

  logOut() {
    this.authService.cerrarSesion().subscribe((res) => {
      console.log(res);
      if (res) {
        localStorage.clear();
        this.userService.currentUser = undefined;
        this.router.navigateByUrl('/');
      } else {
        localStorage.clear();
        this.userService.currentUser = undefined;
        this.router.navigateByUrl('/');
      }
    });
  }
}
