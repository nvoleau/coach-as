import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Seance } from './seances.component';
import { routing }       from './seances.routing';


import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
   
    Calendar,
    Seance
  ],
  providers: [
    CalendarService,

  ]
})
export default class SeanceModule {}
