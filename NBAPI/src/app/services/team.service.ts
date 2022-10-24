import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../interfaces/player.interface';
import { TeamResponse } from '../interfaces/team.interface';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeam(year : number): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${environment.apiBaseUrl}${year}/teams.json`);
  }


}
