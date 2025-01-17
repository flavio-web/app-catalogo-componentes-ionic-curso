import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  standalone: false
})
export class ProgressBarComponent{

  porcentaje: number = 0;
  constructor() { }

  rangeChange( event: any ){
    console.log({ event });
    const rango = event.target.value;

    this.porcentaje = rango / 100;
  }
}
