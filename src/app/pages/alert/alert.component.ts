import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: false
})
export class AlertComponent{

  constructor(private alertCtrl: AlertController ) { }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      cssClass: '',
      backdropDismiss: false,
      header: 'Alert Simple',
      subHeader: 'Subtitulo',
      message: 'Este es un mensaje de alerta',
      buttons: ['OK']
    })

    await alert.present();
  }

  async presentAlertConfirm(){
    const alert = await this.alertCtrl.create({
      header: 'Confirmación!',
      message: 'Mensaje de confirmacion',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirmacion cancelada');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirmacion OK')
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertMultiButtons(){
    const alert = await this.alertCtrl.create({
      header: 'Alerta Multi Buttons',
      subHeader: 'subtitulo',
      message: 'Este es un mensaje de alerta',
      buttons: ['Cancelar', 'Confirmar', 'Eliminar']
    });

    await alert.present();
  }

  async presentAlertPrompt(){
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'firstname',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'lastname',
          type: 'text',
          placeholder: 'Apellido',
          value: 'Román'
        },
        //multiline
        {
          name: 'description',
          id: 'descriptionId',
          type: 'textarea',
          placeholder: 'Descripcion del usuario'
        },
        {
          name: 'website',
          value: 'https://ionicframework.com/docs/api/alert',
          type: 'url',
          placeholder: 'Sitio web'
        },
        {
          name: 'birthday',
          type: 'date',
          min: '1900-01-01',
          max: '2025-01-15'
        },
        {
          name: 'edad',
          type: 'number',
          min: '1',
          max: '50'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Contraseña',
          cssClass: '',
          attributes: {
            maxlength: 10,
          }

        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Ok',
          cssClass: 'primary',
          handler: () => {
            console.log('Confirmar');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio(){
    const alert = await this.alertCtrl.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3',
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('confirmar');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertChecbox(){
    const alert = await this.alertCtrl.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2',
        },
        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            console.log('cancelar');
          }
        },
        {
          text: 'Confirmar',
          handler: () =>{
            console.log('Confirmar');
          }
        }
      ]
    })

    await alert.present();
  }
}
