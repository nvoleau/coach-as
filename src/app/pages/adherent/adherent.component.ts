import {Component,   ViewEncapsulation} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Injectable} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'adherent',
    encapsulation: ViewEncapsulation.None,
  template: require('./adherent.html'),
})
@Injectable()
export class Adherent {

    //public list:Array<any>;
  public items: FirebaseListObservable<any[]>;
  public groupes: FirebaseListObservable<any[]>;


  constructor( private router:Router, af: AngularFire) {
    this.items = af.database.list('/adherents');
    this.groupes = af.database.list('/groupes');

  }

 onSubmit(form:any): void{
    this.items.push(form);
     this.router.navigate(['/pages/adherents']);
  }

  

}
