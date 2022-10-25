import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Team } from 'src/app/interfaces/standings.interface';
import { StandingsService } from 'src/app/services/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  rankingTeams: Team[] = [];
  datos = new MatTableDataSource<Team>();
  displayedColumns: string[] = ['ranking', 'nombre', 'victorias', 'derrotas', 'porcentajeVD', 'balanceConf',
   'balanceLocal', 'balanceVisitante', 'lastTen', 'racha', 'mediaPuntosATK', 'mediaPuntosDEF', 'diferenciaPTS'];

  constructor(private standingsService: StandingsService) { }

  ngOnInit(): void {
    this.cargarStandings();
  }

  cargarStandings() {
    this.standingsService.getAllStandings().subscribe(respuesta => {
      this.rankingTeams = respuesta.league.vegas.teams;
    });
  }


}
