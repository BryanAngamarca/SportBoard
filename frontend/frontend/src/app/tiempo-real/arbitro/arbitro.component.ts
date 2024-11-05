import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-arbitro',
  standalone: true,
  imports: [MatGridListModule, MatIconModule, MatTabsModule, MatCardModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './arbitro.component.html',
  styleUrl: './arbitro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArbitroComponent {
  constructor(private router: Router) { }
  navigateToSelec() {
    this.router.navigate(['/tiempo-real']); 
  }

  displayedColumns: string[] = ['equipos', 'marcador', 'tiempo', 'estado'];
  dataSource = [
    { equipos: 'Quinto - Sexto', marcador: '0 - 1', tiempo: 1, estado: 'En juego' },
    { equipos: 'Equipo B', marcador: '0 - 0', tiempo: 2, estado: 'Suspendido' },
  ];
}
