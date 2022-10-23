import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PlayerStatsResponse } from '../interfaces/player-stats.interface';
import { Player, PlayerResponse } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  public getPlayers(year: number): Observable<PlayerResponse> {
    return this.http.get<PlayerResponse>(`${environment.apiBaseUrl}${year}/players.json`);
  }

  public getById(year: number, id: number) {
    let player: Player = {} as Player;
    this.http.get<PlayerResponse>(`${environment.apiBaseUrl}${year}/players.json`).subscribe(respuesta => {
      respuesta.league.standard.forEach(jugador => {
        if(Number(jugador.personId) == id) {
          player = jugador;
        }
      });
    });
    return player;
  }

  public getStatsById(year: number, id: number): Observable<PlayerStatsResponse> {
    return this.http.get<PlayerStatsResponse>(`${environment.apiBaseUrl}${year}/players/${id}_profile.json`)
  }

}
