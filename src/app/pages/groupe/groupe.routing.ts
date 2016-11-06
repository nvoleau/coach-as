import { Routes, RouterModule }  from '@angular/router';

import { Groupe } from './groupe.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Groupe
  }
];

export const routing = RouterModule.forChild(routes);
