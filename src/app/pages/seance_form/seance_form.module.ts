import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing }       from './seance_form.routing';

import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SeanceForm } from './seance_form.component';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    RatingModule,
    routing
  ],
  declarations: [
   
    SeanceForm,

  ]
})
export default class SeanceFormModule {
}
