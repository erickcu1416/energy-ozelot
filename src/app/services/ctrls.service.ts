import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CtrlsService {

  constructor(private alertController: AlertController, private toastController: ToastController) { }

  // Metodo para mostrar alerta
  async presentAlert(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  // Metodo para mostrar toast
  async presentToast(message, time: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: time
    });
    toast.present();
  }
}
