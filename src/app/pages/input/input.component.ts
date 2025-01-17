import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false
})
export class InputComponent {

  email: string = '';
  password: string = '';

  constructor(private toastController: ToastController) { }

  async onSubmit(){
    const toast = await this.toastController.create({
      message: `Email: ${this.email} - Password: ${this.password}`,
      duration: 3000,
      position: 'bottom',
      color: 'dark'
    });

    await toast.present();
  }

}
