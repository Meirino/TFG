import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
import { LoginObject } from '../../models/login';

@Component({
  selector: 'bot-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public newUserRegister: User = {
    username: '',
    password: '',
    email: '',
    id: ''
  };
  public errorMessage: string = undefined;
  public errorMessageLogin: string = undefined;

  public loginInfo: LoginObject = new LoginObject({email: '', password: ''});

  constructor(public auth: AuthService, public userService: UserService) {
    this.auth.getLoginErrors().subscribe(error => {
      this.errorMessage = error;
    });
  }

  ngOnInit() {}

  public register() {
    if (
      this.newUserRegister.email !== '' &&
      this.newUserRegister.password !== '' &&
      this.newUserRegister.username !== ''
    ) {
      this.auth.register(this.newUserRegister).subscribe(
        res => {
          this.errorMessage = 'Registro completado';
        },
        error => {
          this.errorMessage = error;
        }
      );
    } else {
      this.errorMessage = 'Datos incorrectos';
    }
  }

  public login() {
    try {
      this.auth.login(this.loginInfo).subscribe(
        res => {
          this.userService.currentUser = res;
        },
        err => {
          this.errorMessageLogin = err;
        }
      );
    } catch (error) {
      console.log('Error');
    }
  }

  public checkEmail() {
    return this.auth
      .checkEmail(this.newUserRegister.email)
      .subscribe(result => {
        console.log(result);
      });
  }
}
