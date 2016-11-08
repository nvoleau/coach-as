import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { AdherentList } from './adherent_list.component';

import { routing }       from './adherent_list.routing';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
   
 AdherentList
  ],
  providers: [

  ]
})
export default class AdherentListModule {}
