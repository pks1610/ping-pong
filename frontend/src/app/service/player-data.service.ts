import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  playersDetails = new EventEmitter();

  constructor(private http: HttpClient) { }

  saveGameData(data): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:3000/postGameData', JSON.stringify(data), {
      headers: headers
    })
  }
}
