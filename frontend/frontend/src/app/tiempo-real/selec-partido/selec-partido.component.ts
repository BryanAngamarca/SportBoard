import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CronologiaComponent } from '../cronologia/cronologia.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-selec-partido',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatIconModule, MatTableModule],
  templateUrl: './selec-partido.component.html',
  styleUrl: './selec-partido.component.scss'
})
export class SelecPartidoComponent {
  dialog = inject(MatDialog);
  openCronologiaComponent() {
    this.dialog.open(CronologiaComponent, {
      height: '700px', // Ajusta el tamaño a tus necesidades
    });
  }
  

    displayedColumns: string[] = ['equipos', 'marcador', 'tiempo', 'estado', 'accion'];
    dataSource = [
      { equipos: 'Quinto - Sexto', marcador: '0 - 1', tiempo: 1, estado: 'En juego' },
      { equipos: 'Equipo B', marcador: '0 - 0', tiempo: 2, estado: 'Suspendido' },
    ];
  }
