import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { GroupeList } from './groupe_list.component';

import { routing }       from './groupe_list.routing';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
   
 GroupeList
  ],
  providers: [

  ]
})
export default class GroupeListModule {}
