import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TrEstadisticaComponent } from '../tr-estadistica/tr-estadistica.component';

@Component({
  selector: 'app-cronologia',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, TrEstadisticaComponent],
  templateUrl: './cronologia.component.html',
  styleUrl: './cronologia.component.scss'
})
export class CronologiaComponent {

}
