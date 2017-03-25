import { Component } from '@angular/core';

import { PersonComponent } from './person/person.component';
import { Person } from './Person/person';

const PEOPLE: Person[] = [
  {id: 1, name: "Kaiz", characterClass: "Warlock"},
  {id: 2, name: "End", characterClass: "Priest"}
]

const RAIDERS: Person[] = [
  {id: 3, name: "Bob", characterClass: "Paladin"}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DQLoot';
  people = PEOPLE;
  raiders = RAIDERS;

  moveLocationToRaider(person: Person) {
    if (!this.raiders.includes(person)) {
      var index = this.people.indexOf(person, 0);
      this.people.splice(index, 1);
      this.raiders.push(person);
    }
  }

  moveLocationToPerson(person: Person){
    if (!this.people.includes(person)){
      var index = this.raiders.indexOf(person, 0);
      this.raiders.splice(index, 1);
      this.people.push(person);
    }
  }
}
