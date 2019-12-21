import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthorizatedGuard implements CanActivate {
  constructor(private router: Router,
              private userService: UserService) { }
  canActivate() {
    console.log(this.userService.currentUser);
    if (this.userService.currentUser) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
