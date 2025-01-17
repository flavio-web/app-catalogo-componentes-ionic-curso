import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
  standalone: false
})
export class InfiniteScrollComponent{

  data = Array(20);
  @ViewChild( IonInfiniteScroll ) infiniteScroll!: IonInfiniteScroll

  loadData( event: any ){
    console.log( event );

    setTimeout(() => {

      if( this.data.length > 50 ){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArray = Array(20);
      this.data.push( ...nuevoArray );

      this.infiniteScroll.complete();
    }, 3000);
  }
}
