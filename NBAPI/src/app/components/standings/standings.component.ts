import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Team } from 'src/app/interfaces/standings.interface';
import { StandingsService } from 'src/app/services/standings.service';
import { MatTable } from '@angular/material/table';
import { MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  rankingTeams: Team[] = [];
  @ViewChild(MatSort) orden!: MatSort;
  datos = new MatTableDataSource<Team>();
  displayedColumns: string[] = ['ranking', 'nombre', 'victorias', 'derrotas', 'porcentajeVD', 'balanceConf',
   'balanceLocal', 'balanceVisitante', 'lastTen', 'racha'];
  
  
   currentYear = 2022;


  constructor(private standingsService: StandingsService) { }

  ngOnInit(): void {
    this.cargarStandings();
    
  }
  
  
  
  cargarStandings() {
    this.standingsService.getAllStandings().subscribe(respuesta => {
      this.rankingTeams = respuesta.league.vegas.teams;
      this.datos = new MatTableDataSource(this.rankingTeams);
      this.datos.sort = this.orden;
    });
  }


}
