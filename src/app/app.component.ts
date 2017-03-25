import { Component } from '@angular/core';

import { PersonComponent } from './person/person.component';
import { Person } from './Person/person';

// Placeholders for what will eventually be a database call
const PEOPLE: Person[] = [
  {id: 1, name: "Poorchoice", characterClass: "Warlock"},
  {id: 2, name: "Endressa", characterClass: "Priest"}
]

const RAIDERS: Person[] = [
  {id: 3, name: "Bob", characterClass: "Paladin"}
]

let sortText = "Sort";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DQLoot';
  people = PEOPLE;
  raiders = RAIDERS;

  // Move a person from the Roster array to the Raider array
  moveLocationToRaider(person: Person) {
    if (!this.raiders.includes(person)) {
      var index = this.people.indexOf(person, 0);
      this.people.splice(index, 1);
      this.raiders.push(person);
    }
  }

  // Move a raider to the Roster array
  moveLocationToPerson(person: Person){
    if (!this.people.includes(person)){
      var index = this.raiders.indexOf(person, 0);
      this.raiders.splice(index, 1);
      this.people.push(person);
    }
  }

  sortPeople() {
    this.people.sort((left, right): number => {
      if (left.name.charAt(0) > right.name.charAt(0)){
        return 1;
      }
      if (left.name.charAt(0) < right.name.charAt(0)){
        return -1;
      }
      return 0;
    });
  }

  sortRaiders() {
    this.raiders.sort((left, right): number => {
      if (left.name.charAt(0) > right.name.charAt(0)){
        return 1;
      }
      if (left.name.charAt(0) < right.name.charAt(0)){
        return -1;
      }
      return 0;
    });
  }

  // Take all raiders and put them back into the Roster
  resetPeople() {
    for(let raider of this.raiders){
      this.people.push(raider);
    }

    // Sort for the lulz7
    this.sortPeople();

    // Null raiders because shit's empty
    this.raiders = [];
  }
}
