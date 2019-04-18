import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  API_ENDPOINT = 'http://aquaculturemobile.ozelot.it/api/login';

  constructor(private httpClient: HttpClient) { }

  doLogin(body): Observable <any> {
    const params = JSON.stringify(body);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache'});
    return this.httpClient.post(this.API_ENDPOINT, params, { headers: headers });
  }
}
