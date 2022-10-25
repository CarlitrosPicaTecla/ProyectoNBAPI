import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { StandingsResponse } from '../interfaces/standings.interface';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private http: HttpClient) { }

  public getAllStandings(): Observable<StandingsResponse> {
    return this.http.get<StandingsResponse>(`${environment.apiBaseUrl}current/standings_all.json`);
  }

  public getConferenceStandings(): Observable<StandingsResponse> {
    return this.http.get<StandingsResponse>(`${environment.apiBaseUrl}current/standings_conference.json`);
  }
}
