import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
  standalone: false,
})
export class ActionSheetComponent{

  title: string = 'Action Sheet';

  constructor( private actionSheetController: ActionSheetController) { }

  onClick(){
    this.presentActionSheet();
  }


  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Compartir Album',
      cssClass: '',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'rojo',
          handler: () => {
            console.log('Click en el boton eleiminar')
          }
        },
        {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            console.log('Click en el boton de compartir')
          }
        },
        {
          text: 'Favorito',
          icon: 'heart',
          handler: () => {
            console.log('Click en el boton favorito')
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Click en el boton cancelar')
          }
        }
      ]
    });

    await actionSheet.present();
  }


}
