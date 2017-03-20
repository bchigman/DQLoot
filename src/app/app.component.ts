import { Component, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DQLoot!';
  selectOptions = [
    {value: "Hi", name: "First"},
    {value: "Hey", name: "Second"},
    {value: "Guy", name: "Third"}
  ]

  modalActions = new EventEmitter<string|MaterializeAction>();

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
