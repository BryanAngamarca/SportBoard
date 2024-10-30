<<<<<<< Updated upstream
import { Component, inject } from '@angular/core';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
    this.dialog.open(component, {
      width: '300px', // Ajusta el tamaño a tus necesidades
    });
  }
}

@Component({
  selector: '',
  templateUrl: 'ejemploEquipo.html',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class ejem {
=======
export class CronologiaComponent implements OnInit, OnDestroy {
  time: string = '00:00'; // Variable que contendrá el tiempo
  private intervalId: any;

  ngOnInit() {
    this.startTimer(); // Iniciar el reloj cuando el componente se cargue
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpiar el intervalo cuando el componente se destruya
    }
  }

  startTimer() {
    let minutes = 0;
    let seconds = 0;

    this.intervalId = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      this.time = this.formatTime(minutes, seconds);
    }, 1000); // Actualizar cada segundo
  }

  formatTime(minutes: number, seconds: number): string {
    const min = minutes < 10 ? `0${minutes}` : minutes;
    const sec = seconds < 10 ? `0${seconds}` : seconds;
    return `${min}:${sec}`;
  }
>>>>>>> Stashed changes
}
