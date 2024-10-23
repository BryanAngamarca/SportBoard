import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { CronologiaComponent } from './cronologia/cronologia.component';
import { TrEstadisticaComponent } from './tr-estadistica/tr-estadistica.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'app-cronologia',
  pathMatch: 'full'
},
{
  path: 'app-cronologia',
  component: CronologiaComponent
},
{
  path: 'app-tr-estadistica',
  component: TrEstadisticaComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiempoRealRoutingModule { }
