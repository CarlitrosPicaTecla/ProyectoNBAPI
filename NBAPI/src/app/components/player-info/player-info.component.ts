import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegularSeason, Season, Stats } from 'src/app/interfaces/player-stats.interface';
import { Player } from 'src/app/interfaces/player.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  currentYear = 2022;
  player: Player = {} as Player;
  playerStats: Season[] = [];

  constructor(private ruta: ActivatedRoute,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.cargarJugador(this.currentYear);
  }

  cargarJugador(year: number) {
    const playerId = Number(this.ruta.snapshot.paramMap.get('id'));
    this.playerService.getStatsById(year, playerId).subscribe(respuesta => {
      respuesta.league.standard.stats.regularSeason.season.forEach(temporada => {
        this.playerStats.push(temporada);
      });
      this.player = this.playerService.getById(this.currentYear, playerId);
    });

  }

}
