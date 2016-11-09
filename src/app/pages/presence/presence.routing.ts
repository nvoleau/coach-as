import { Routes, RouterModule }  from '@angular/router';

import { Presence } from './presence.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Presence
  }
];

export const routing = RouterModule.forChild(routes);
