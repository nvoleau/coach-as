import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
      //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
      { path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
     // { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
      { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
      { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
      { path: 'maps', loadChildren: () => System.import('./maps/maps.module') },
       { path: 'seances', loadChildren: () => System.import('./seances/seances.module') },
         { path: 'seance', loadChildren: () => System.import('./seance_form/seance_form.module')},
          { path: 'groupes', loadChildren: () => System.import('./groupe_list/groupe_list.module')},
            { path: 'groupe', loadChildren: () => System.import('./groupe/groupe.module')}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
