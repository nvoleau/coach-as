import {Component,   ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'seance_form',
    encapsulation: ViewEncapsulation.None,
  template: require('./seance_form.html'),
})
export class SeanceForm {

   public _rate1:number = 3;
   public _max1:number = 10;

  constructor() {
  }
}
