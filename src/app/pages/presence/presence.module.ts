import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing }       from './presence.routing';

import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Presence } from './presence.component';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    RatingModule,
    routing
  ],
  declarations: [
   
    Presence,

  ]
})
export default class PresenceModule {
}
