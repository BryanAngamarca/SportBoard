import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TrEstadisticaComponent } from '../tr-estadistica/tr-estadistica.component';
import { MatDialog, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cronologia',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, MatButtonModule,TrEstadisticaComponent],
  templateUrl: './cronologia.component.html',
  styleUrl: './cronologia.component.scss'
})
export class CronologiaComponent {
  dialog = inject(MatDialog);

  openDialog(text: string): void {
    let component;
    switch (text) {
      case 'ejemplo1':
        component = ejem;
        break;
      case 'ejemplo2':
        component = TrEstadisticaComponent;
        break;
      default:
        console.error('Componente dsconocido');
        return;
    }
    this.dialog.open(component);
  }
}

@Component({
  selector: '',
  templateUrl: 'ejemploEquipo.html',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class ejem {
}
