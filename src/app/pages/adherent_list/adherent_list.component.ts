import {Component,   ViewEncapsulation} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Injectable} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'adherent_list',
    encapsulation: ViewEncapsulation.None,
  template: require('./adherent_list.html'),
})
@Injectable()
export class AdherentList {

    //public list:Array<any>;
  public items: FirebaseListObservable<any[]>;


  constructor( private router:Router, af: AngularFire) {
    this.items = af.database.list('/adherents');

  }


  addAdherent($event) {

    this.router.navigate(['/pages/adherent']);
  }


}
