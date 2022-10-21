import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  playerList: Player[] = [];
  displayedColumns: string[] = ['nombre', 'equipo', 'posicion', 'altura', 'peso', 'pais'];
  
  
  
  constructor(private playerService: PlayerService) { }
  
  ngOnInit(): void {
    this.playerService.getPlayers(2022).subscribe(respuesta => {
      this.playerList = [...respuesta.league.standard, ...respuesta.league.africa, ...respuesta.league.sacramento, ...respuesta.league.utah, ...respuesta.league.vegas];      
    });
  }

}
