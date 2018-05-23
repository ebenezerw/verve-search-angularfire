import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchmanService {

  readonly ROOT_URL = 'https://us-central1-verve-app-search.cloudfunctions.net/appSearchProxy'

  constructor(private http: HttpClient) { }

  currentApps(searchData: string, opSystem: string): Observable<any> {
    let params = new HttpParams()
    params = params.set('searchData', searchData)
    params = params.set('opSystem', opSystem)

    return this.http.get(this.ROOT_URL, { params })

  }

}
