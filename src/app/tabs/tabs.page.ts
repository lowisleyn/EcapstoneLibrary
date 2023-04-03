import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private alertController: AlertController) {
    window.addEventListener('online', () => this.handleOnline());
    window.addEventListener('offline', () => this.handleOffline());
  }

  async handleOffline() {
    const alert = await this.alertController.create({
      header: 'Connection lost',
      message: 'You are offline. Some features may not work properly.',
      buttons: ['OK']
    });
    alert.present();
  }

  async handleOnline() {
    const alert = await this.alertController.create({
      header: 'Connection restored',
      message: 'You are online again.',
      buttons: ['OK']
    });
    alert.present();
  }
}
