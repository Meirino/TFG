import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from "../../core/models/user.model";
import {AuthenticationService} from "../../services/auth.service";
import {StorageService} from "../../core/services/storage.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public isLinear = true;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public user: User;
  public passwordConfirm = '';
  public error: string = undefined;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private storageService: StorageService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.user = {id: '', username: '', email: '', password: ''};
  }

  public checkPassword(): boolean {
    return this.user.password === this.passwordConfirm;
  }

  public register() {
    if (this.checkPassword()) {
      this.authenticationService.register(this.user).subscribe(
        res => res ? this.error = 'Ha funcionado' : this.error = 'Error al registrarse',
        err => this.error = err.message
      );
    }
  }

}
