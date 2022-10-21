import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PlayerResponse } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  public getPlayers(year: number): Observable<PlayerResponse> {
    return this.http.get<PlayerResponse>(`${environment.apiBaseUrl}${year}/players.json`);
  }

}
