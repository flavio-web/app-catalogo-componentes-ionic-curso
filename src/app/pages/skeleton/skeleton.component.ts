import { Component, OnInit } from '@angular/core';

interface Futbolista {
  name: string;
  birthday: Date | string;
  nickname?: string;
  icon: string;
}

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  standalone: false
})
export class SkeletonComponent implements OnInit {

  futbolistas: Futbolista[] = [];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.futbolistas = [
        {
          name: 'Leonel Messi',
          birthday: '24 de junio de 1987',
          nickname: 'La pulga',
          icon: 'game-controller-outline'
        },
        {
          name: 'Diego Armando Maradona',
          birthday: '30 de octubre de 1960',
          nickname: 'Pelusa',
          icon: 'happy-outline'
        },
        {
          name: 'Cristiano Ronaldo dos Santos Aveiro',
          birthday: '5 de febrero de 1985',
          nickname: 'El Bicho',
          icon: 'rocket-outline'
        },
        {
          name: 'Edson Arantes do Nascimento',
          birthday: '23 de octubre de 1940',
          nickname: 'Pelé',
          icon: 'sparkles-outline'
        }
      ]
    }, 5000);
  }

}
