import {Component,   ViewEncapsulation} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Injectable} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'presence',
    encapsulation: ViewEncapsulation.None,
  template: require('./presence.html'),
})
@Injectable()
export class Presence {

   public rate:number = 3;
   public _max1:number = 10;
   public userForm={};
   public key:any;
   //public form = new Seance();

     items: FirebaseListObservable<any>;
     groupes: FirebaseListObservable<any>;


  constructor( af: AngularFire,  private route: ActivatedRoute,) {
    //this.items = af.database.list('/seances');
     this.groupes = af.database.list('/groupes');


     this.route.params.forEach((params: Params) => {
     this.key = params['id']; // (+) converts string 'id' to a number
    
     //this.service.getHero(id).then(hero => this.hero = hero);

    
   });

 console.log("key "+this.key);

 this.items = af.database.list('/seances', {
      query: {
        orderByKey : true,
        equalTo: this.key
      }
    });



console.log("******");
console.log(this.items);

  }




//https://scotch.io/tutorials/angular-2-form-validation

  onSubmit(form:any): void{
  
  }
}
