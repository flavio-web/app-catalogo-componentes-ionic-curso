import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent  implements OnInit {
avatar: string = '/assets/img/avatar.png';
  constructor() { }

  ngOnInit() {}

}
