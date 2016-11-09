import {Component, ViewEncapsulation} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';
import { Router} from '@angular/router';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {ListService} from './list.service';

@Component({
  selector: 'list',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./list.scss')],
  template: require('./list.html')
})
export class List {
  
  public dashboardColors = this._baConfig.get().colors.dashboard;

  //public list:Array<any>;
  public list: FirebaseListObservable<any[]>;
  public newTodoText:string = '';

  constructor(private _baConfig:BaThemeConfigProvider, private _listService:ListService, private router:Router   ) {
    this.list = this._listService.getList();
    

    //this.list.forEach((item) => {
      //item.color = this._getRandomColor();
   // });
  }

  getNotDeleted() {
    //return this.list.filter((item:any) => {
      //return !item.deleted
    //})
    console.log(this.list);
    return this.list;
  }

  addToDoItem($event) {

    this.router.navigate(['/pages/seance']);

    /** if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {

      this.list.unshift({
        text: this.newTodoText,
        color: this._getRandomColor(),
      });
      this.newTodoText = '';
    }*/
  }

setPresence(item:any){
  console.log(item);
   console.log(item.$key);
    this.router.navigate(['/pages/presence',item.$key]);
}

  private _getRandomColor() {
    let colors = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);

    var i = Math.floor(Math.random() * (colors.length - 1));
    return colors[i];
  }
}
