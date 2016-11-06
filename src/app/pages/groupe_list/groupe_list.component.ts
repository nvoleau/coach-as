import {Component,   ViewEncapsulation} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Injectable} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'groupe_list',
    encapsulation: ViewEncapsulation.None,
  template: require('./groupe_list.html'),
})
@Injectable()
export class GroupeList {

    //public list:Array<any>;
  public items: FirebaseListObservable<any[]>;


  constructor( private router:Router, af: AngularFire) {
    this.items = af.database.list('/groupes');

  }


  addGroupe($event) {

    this.router.navigate(['/pages/groupe']);
  }


}
