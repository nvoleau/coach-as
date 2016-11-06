import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Groupe } from './groupe.component';

import { routing }       from './groupe.routing';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
   
 Groupe
  ],
  providers: [

  ]
})
export default class GroupeModule {}
