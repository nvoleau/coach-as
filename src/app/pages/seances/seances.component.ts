import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'seances',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./seances.scss')],
  template: require('./seances.html')
})
export class Seance {

  constructor() {
  }

}
