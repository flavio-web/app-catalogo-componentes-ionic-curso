import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  standalone: false
})
export class AvatarComponent  implements OnInit {

  avatar: string = '/assets/img/avatar.png';
  constructor() { }

  ngOnInit() {}

}
