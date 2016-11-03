import {Component,   ViewEncapsulation} from '@angular/core';
import {Seance} from './seance';

@Component({
  selector: 'seance_form',
    encapsulation: ViewEncapsulation.None,
  template: require('./seance_form.html'),
})
export class SeanceForm {

   public _rate1:number = 3;
   public _max1:number = 10;
   //public form = new Seance();

  constructor() {
  }

  onSubmit(form:any): void{
    console.log(form);
  }
}
