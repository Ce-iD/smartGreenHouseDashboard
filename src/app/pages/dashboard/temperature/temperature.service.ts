import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TemperatureModel} from './temperature.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemperatureService {

  private baseUrl: string = 'http://192.168.1.9/iot/IOTService.svc/getinfo?';

  constructor(private httpClient: HttpClient) {
  }

  getData(params: string): Observable<TemperatureModel[]> {
    return this.httpClient.get<TemperatureModel[]>(`${this.baseUrl}` + params);
  }
}
