import { Component, OnInit, EventEmitter } from '@angular/core';

import { MaterializeAction } from 'angular2-materialize';

import { PersonComponent } from '../person/person.component';
import { Person } from '../person/person';
import { Character } from '../character/character';

// Placeholders for what will eventually be a database call
const PEOPLE: Person[] = [
  {
    id: 1,
    name: 'Poorchoice',
    characterClass: 'Warlock',
    selectedCharacter: {
      name: 'Poorchoice',
      characterClass: 'Warlock',
      lootToken: 'Conqueror',
      classColor: ''
    },
    characters: [
      {
        name: 'Poorchoice',
        characterClass: 'Warlock',
        lootToken: 'Conqueror',
        classColor: ''
      }
    ]
  },
  {
    id: 2,
    name: 'Endressa',
    characterClass: 'Priest',
    selectedCharacter: {
      name: 'Endressa',
      characterClass: 'Priest',
      lootToken: 'Conqueror',
      classColor: ''
    },
    characters: [
      {
        name: 'Endressa',
        characterClass: 'Priest',
        lootToken: 'Conqueror',
        classColor: ''
      }
    ]
  }
];

const RAIDERS: Person[] = [
  {
    id: 3,
    name: 'Bob',
    characterClass: 'Paladin',
    selectedCharacter: {
      name: 'Bob',
      characterClass: 'Paladin',
      lootToken: 'Conqueror',
      classColor: ''
    },
    characters: [
      {
        name: 'Bob',
        characterClass: 'Paladin',
        lootToken: 'Conqueror',
        classColor: ''
      }
    ]
  }
];

const sortText = 'Sort';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  people = PEOPLE;
  raiders = RAIDERS;

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  ngOnInit() {
  }

  // Move a person from the Roster array to the Raider array
  moveLocationToRaider(person: Person) {
    if (!this.raiders.includes(person)) {
      const index = this.people.indexOf(person, 0);
      this.people.splice(index, 1);
      this.raiders.push(person);
    }
  }

  // Move a raider to the Roster array
  moveLocationToPerson(person: Person) {
    if (!this.people.includes(person)) {
      const index = this.raiders.indexOf(person, 0);
      this.raiders.splice(index, 1);
      this.people.push(person);
    }
  }

  sortPeople() {
    this.people.sort((left, right): number => {
      if (left.name.charAt(0) > right.name.charAt(0)) {
        return 1;
      }
      if (left.name.charAt(0) < right.name.charAt(0)) {
        return -1;
      }
      return 0;
    });
  }

  sortRaiders() {
    this.raiders.sort((left, right): number => {
      if (left.name.charAt(0) > right.name.charAt(0)) {
        return 1;
      }
      if (left.name.charAt(0) < right.name.charAt(0)) {
        return -1;
      }
      return 0;
    });
  }

  // Take all raiders and put them back into the Roster
  resetPeople() {
    for (const raider of this.raiders) {
      this.people.push(raider);
    }

    // Sort for the lulz7
    this.sortPeople();

    // Null raiders because shit's empty
    this.raiders = [];
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }
}
