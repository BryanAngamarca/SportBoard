import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { CronologiaComponent } from './cronologia/cronologia.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'app-cronologia',
  pathMatch: 'full'
},
{
  path: 'app-cronologia',
  component: CronologiaComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiempoRealRoutingModule { }
