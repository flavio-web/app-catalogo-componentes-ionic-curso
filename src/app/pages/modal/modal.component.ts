import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: false
})
export class ModalComponent {

  isModalOpen: boolean = false;

  setOpen( status: boolean = false ){
    this.isModalOpen = status;
  }

/*   closeModal(){
    this.setOpen();
  } */

}
