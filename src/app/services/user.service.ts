import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  key: string;
  user = false;

  constructor(
    private nativeStorage: NativeStorage,
    private platform: Platform,
  ) { }

  saved() {
    this.user = true;
  }

  saveStorage() {
    this.key = 'loged';
    if (this.platform.is('cordova')) {
      this.nativeStorage.setItem('key', this.key)
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
    } else {
      localStorage.setItem('key', this.key);
    }
  }

  loadStorage() {
    return new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        // celular
        this.nativeStorage.getItem('key')
          .then(
            data => {
              this.key = data;
              resolve(true);
            },
            error => {
              resolve(false);
            }
          );
      } else {
        // escritorio
        if (localStorage.getItem('key')) {
          this.key = localStorage.getItem('key');
          resolve(true);
        } else {
          resolve(false);
        }
      }
    });
  }

  deleteStorageUser() {
    this.key = null;
    this.user = false;
    if (this.platform.is('cordova')) {
      this.nativeStorage.remove('key').then(
        data => {
          console.log('Eliminado con exito del storage');

        }, err => console.log(err)
      ).catch(err => console.log(err));
    } else {
      localStorage.removeItem('key');
    }
  }
}
