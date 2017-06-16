import { Component, Input } from '@angular/core';

@Component({
  selector: 'class-button',
  templateUrl: './class-button.component.html',
  styleUrls: ['./class-button.component.css']
})
export class ClassButtonComponent {
  @Input() className: string;
  color: string = '#26a69a';
  textColor: string ='#FFFFFF';
  isSelected: boolean = false;

  // constructor(name: string) {
  //   this.className = name;
  // }

  setColor(): string {
    switch (this.className) {
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
      default: return this.color = '#26a69a';
    }
  }

  setTextColor(): string {
    if (this.className === 'Priest'
        || this.className === 'Rogue'
        || this.className === 'Monk') {
      return this.textColor = '#000000';
    } else {
      return this.textColor = '#FFFFFF';
    }
  }

  set() {
    this.setColor();
    this.setTextColor();
    this.isSelected = true;
  }

  unset() {
    this.color = '#26a69a';
    this.textColor = '#FFFFFF';
    this.isSelected = false;
  }

}
