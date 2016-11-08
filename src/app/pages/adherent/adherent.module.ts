import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Adherent } from './adherent.component';

import { routing }       from './adherent.routing';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
   
 Adherent
  ],
  providers: [

  ]
})
export default class AdherentModule {}
