import { Routes, RouterModule }  from '@angular/router';

import { AdherentList } from './adherent_list.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AdherentList
  }
];

export const routing = RouterModule.forChild(routes);
