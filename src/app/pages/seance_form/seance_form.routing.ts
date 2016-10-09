import { Routes, RouterModule }  from '@angular/router';

import { SeanceForm } from './seance_form.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: SeanceForm
  }
];

export const routing = RouterModule.forChild(routes);
