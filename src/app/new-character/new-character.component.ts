import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setColor(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const className = target.innerHTML.toLowerCase().replace(' ', '');

    target.attributes.class.value += (' ' + className + '-color');
  }

}
