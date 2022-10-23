import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Player} from 'src/app/interfaces/player.interface';
import { Team } from 'src/app/interfaces/team.interface';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  playerList: Player[] = [];
  displayedColumns: string[] = ['nombre', 'equipo', 'posicion', 'altura', 'peso', 'pais'];
  datos = new MatTableDataSource();
  years: number[] = [2018, 2019, 2020, 2021, 2022];
  currentYear = 2022;
  teamList: Team[] = [];
  playerId!: string;
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  
  
  constructor(private playerService: PlayerService,
    private teamService: TeamService) { }
  
  ngOnInit(): void {
    this.cargarJugadores(this.currentYear);
  }
  
  getFotoJugador(jugador: Player) {
    this.playerId = jugador.personId;
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${this.playerId}.png`
  }

  aplicarFiltro(evento: Event) {
    const filtro = (evento.target as HTMLInputElement).value;
    this.datos.filter = filtro.trim().toLowerCase();
  }
  
  cargarJugadores(year: number) {
    this.playerService.getPlayers(year).subscribe(respuesta => {
      this.playerList = respuesta.league.standard;
      this.datos.data = this.playerList;
      this.datos.paginator = this.paginator;
      this.datos.sort = this.sort;
      this.teamService.getTeam(year).subscribe(respuesta => {
        this.teamList = respuesta.league.standard;
      })
      
    });

  }

  getPlayerTeam(player: Player) {
    let team: Team = {} as Team;
    this.teamList.forEach(equipo => {
      if(player.teamId == equipo.teamId) {
        team = equipo;
      }
    })
    return team.tricode;
  }

  choseSelect(year: number) {
    this.currentYear = year;
    this.cargarJugadores(year);
  }
}
