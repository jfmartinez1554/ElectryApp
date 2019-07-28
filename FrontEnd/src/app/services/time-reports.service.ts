import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TimeReport } from '../classes/TimeReports';

@Injectable({
  providedIn: 'root'
})
export class TimeReportsService {

  constructor(private http: HttpClient) { }

  getEstadosMaquinas(): Observable<TimeReport[]> {
    return this.http.get<TimeReport[]>('http://localhost:3000/api/EstadoMaquinas');
  }

  getEstadosMaquinasAfterDate(datetime: string): Observable<TimeReport[]> {
    return this.http.get<TimeReport[]>('http://localhost:3000/api/EstadoMaquinas/' + datetime);
  }
}
