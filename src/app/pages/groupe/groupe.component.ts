import {Component,   ViewEncapsulation} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Injectable} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'groupe',
    encapsulation: ViewEncapsulation.None,
  template: require('./groupe.html'),
})
@Injectable()
export class Groupe {

    //public list:Array<any>;
  public items: FirebaseListObservable<any[]>;


  constructor( private router:Router, af: AngularFire) {
    this.items = af.database.list('/groupes');

  }

 onSubmit(form:any): void{
    this.items.push(form);
     this.router.navigate(['/pages/groupes']);
  }

  

}
