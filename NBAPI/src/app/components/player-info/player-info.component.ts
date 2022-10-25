import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareerSummary, RegularSeason, Season, Stats } from 'src/app/interfaces/player-stats.interface';
import { Player } from 'src/app/interfaces/player.interface';
import { Team } from 'src/app/interfaces/team.interface';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  player: Player = {} as Player;
  playerStats: Season[] = [];
  playerList: Player[] = [];
  team: Team = {} as Team;
  teamList: Team[] = [];
  teamId: string | undefined;
  playerCarreer: CareerSummary = {} as CareerSummary;

  
  constructor(private ruta: ActivatedRoute,
    private playerService: PlayerService,
    private teamService: TeamService) { }
    
    ngOnInit(): void {
    this.cargarJugador();
  }
  
  cargarJugador() {
    const playerId = Number(this.ruta.snapshot.paramMap.get('id'));
    const year = Number(this.ruta.snapshot.paramMap.get('year'));
    this.playerService.getStatsById(year, playerId).subscribe(respuesta => {
      this.playerService.getPlayers(year).subscribe(respuesta => {
        this.teamService.getTeam(year).subscribe(respuesta => {
          this.teamList = respuesta.league.standard;
          this.teamList.forEach(equipo => {
            if(this.player.teamId == equipo.teamId) {
              this.team = equipo;
            }
          });
        });
        this.playerList = respuesta.league.standard;
        this.playerList.forEach(jugador => {
          if(Number(jugador.personId) == playerId) {
            this.player = jugador;
          }
        });
      });
      this.playerCarreer = respuesta.league.standard.stats.careerSummary;
      respuesta.league.standard.stats.regularSeason.season.forEach(temporada => {
        this.playerStats.push(temporada);
      });
      
    });
    
  }

  getFotoJugador(jugador: Player) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${jugador.personId}.png`
  }

  getFotoEquipo(equipo: Team) {
    this.teamId = equipo.teamId;
    return `https://cdn.nba.com/logos/nba/${this.teamId}/global/L/logo.svg`
  }

  getFotoEquipoById(id?: string) {
    return `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`
  }

  calcularStats(reb: string, partidos: string): number {
    let resultado: number;
    resultado = Number(reb) / Number(partidos);
    return Math.round(resultado * 10) / 10;
  }
  
}
