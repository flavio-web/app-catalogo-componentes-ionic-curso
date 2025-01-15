import { Component } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss'],
  standalone: false
})
export class RefreshComponent{

  doRefresh( event: any ){

    console.log( event );

    setTimeout(() => {
      event.target.complete();
      console.log('evento refresh terminado')
    }, 3000);

  }

}
