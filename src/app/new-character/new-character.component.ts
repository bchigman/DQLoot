import { Component } from '@angular/core';

import { ClassButtonComponent } from '../class-button/class-button.component';


@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent {
  characterName: string;
  characterClass: string = "Choose a class";

  classNames = [
    'Death Knight',
    'Demon Hunter',
    'Druid',
    'Hunter',
    'Mage',
    'Monk',
    'Paladin',
    'Priest',
    'Rogue',
    'Shaman',
    'Warlock',
    'Warrior'
  ];

  constructor() { }

  setText(text: string) {
    this.characterClass = text;
  }

}
