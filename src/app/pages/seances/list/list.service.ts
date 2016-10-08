import {Injectable} from '@angular/core';

@Injectable()
export class ListService {

  private _todoList = [
    { groupe: 'Benjamin', activite:'Natation', date:'10/10/2016' },
    { groupe: 'Minime, Cadet, Junior', activite:'Natation', date:'09/10/2016' },
    { groupe: 'Minime, Cadet, Junior', activite:'CAP' , date:'08/10/2016'},
    { groupe: 'Minime, Cadet, Junior', activite:'Natation', date:'07/10/2016' },
    { groupe: 'Minime, Cadet, Junior', activite:'Natation' , date:'06/10/2016'},
    { groupe: 'Minime, Cadet, Junior', activite:'Natation', date:'05/10/2016'},
    { groupe: 'Minime, Cadet, Junior', activite:'Vélo' , date:'04/10/2016'},
    { groupe: 'Benjamin', activite:'Natation' , date:'03/10/2016' },
    { groupe: 'Minime, Cadet, Junior', activite:'Vélo' , date:'02/10/2016'},
    { groupe: 'Minime, Cadet, Junior', activite:'Natation' , date:'01/10/2016' },
  ];

  getList() {
    return this._todoList;
  }
}
