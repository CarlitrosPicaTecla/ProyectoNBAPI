import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamResponse } from '../interfaces/team';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeam(year : number): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${environment.apiBaseUrl}/${year}/team.json`);
  }
}
