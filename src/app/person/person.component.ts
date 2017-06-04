import { Component, OnInit, Input } from '@angular/core';

import { Person } from './person';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  color: string;
  textColor: string;

  constructor() {}

  ngOnInit() {
  }

  setCardColor(): string {
    switch (this.person.characterClass) {
      case 'Death Knight': return this.color = '#C41F3B';
      case 'Demon Hunter': return this.color = '#A330C9';
      case 'Druid': return this.color = '#FF7D0A';
      case 'Hunter': return this.color = '#ABD473';
      case 'Mage': return this.color = '#69CCF0';
      case 'Monk': return this.color = '#00FF96';
      case 'Paladin': return this.color = '#F58CBA';
      case 'Priest': return this.color = '#FFFFFF';
      case 'Rogue': return this.color = '#FFF569';
      case 'Shaman': return this.color = '#0070DE';
      case 'Warlock': return this.color = '#9482C9';
      case 'Warrior': return this.color = '#C79C6E';
      default: return this.color = '';
    }
  }

  setCardTextColor(): string {
    if (this.person.characterClass === 'Priest') {
      return this.textColor = '#000000';
    } else {
      return this.textColor = '#FFFFFF';
    }
  }
}
