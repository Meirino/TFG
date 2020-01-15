import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/models/user.model';
import {StorageService} from '../../core/services/storage.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  public user: User;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }

}
