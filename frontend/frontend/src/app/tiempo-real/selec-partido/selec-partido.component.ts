import { Component} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CronologiaComponent } from '../cronologia/cronologia.component';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-selec-partido',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule,  MatCardModule, MatIconModule, MatTableModule],
  templateUrl: './selec-partido.component.html',
  styleUrl: './selec-partido.component.scss'
})
export class SelecPartidoComponent {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  displayedColumns: string[] = ['equipo', 'puntos', 'partidosJugados', 'partidosGanados', 'partidosEmpatados', 'partidosPerdidos', 'vetTr'];
  dataSource = [
    { equipo: 'Equipo A', puntos: 30, partidosJugados: 10, partidosGanados: 9, partidosEmpatados: 1, partidosPerdidos: 0 },
    { equipo: 'Equipo B', puntos: 25, partidosJugados: 10, partidosGanados: 8, partidosEmpatados: 1, partidosPerdidos: 1 },
    // Agrega más datos según sea necesario
  ];
}
