import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CoachReponse } from '../interfaces/coach.interface';
@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http: HttpClient) { }

  public getCoachs(year: number): Observable<CoachReponse> {
    return this.http.get<CoachReponse>(`${environment.apiBaseUrl}${year}/coaches.json`);
  }

}
