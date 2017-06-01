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
    if (this.person.characterClass === 'Warlock') {
      return this.color = '#6a1b9a';
    } else if (this.person.characterClass === 'Priest') {
      return this.color = '#fafafa';
    } else if (this.person.characterClass === 'Paladin') {
      return this.color = '#f06292';
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
