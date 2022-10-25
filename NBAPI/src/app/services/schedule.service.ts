import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { ScheduleResponse } from '../interfaces/schedule.interface';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getGames(year : number ): Observable<ScheduleResponse> {
    return this.http.get<ScheduleResponse>(`${environment.apiBaseUrl}${year}/schedule.json`);
  }

}
