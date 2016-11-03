import {Component,   ViewEncapsulation} from '@angular/core';
import {Seance} from './seance';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Injectable} from '@angular/core';


@Component({
  selector: 'seance_form',
    encapsulation: ViewEncapsulation.None,
  template: require('./seance_form.html'),
})
@Injectable()
export class SeanceForm {

   public _rate1:number = 3;
   public _max1:number = 10;
   //public form = new Seance();

     items: FirebaseListObservable<any>;

  constructor( af: AngularFire) {
    this.items = af.database.list('/seances');

  }


//https://scotch.io/tutorials/angular-2-form-validation

  onSubmit(form:any): void{
    console.log(form);
    this.items.push({date:form});
  }
}
