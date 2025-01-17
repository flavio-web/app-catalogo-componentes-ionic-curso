import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: false
})
export class LoadingComponent{

  constructor( private loadingCtrl: LoadingController ) { }


  async showLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'circles',
      duration: 3000,
      mode: 'ios',
    });

    await loading.present();
  }

}
