import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const URL = {
  User: () => `https://dummyapi.io/data/api/user?page=2limit=3`,
  Picture: () => `https://picsum.photos/v2/list?page=2&limit=100`,
  Data: () =>
    `https://dummyapi.io/data/api/user/0P6E1d4nr0L1ntW8cjGU/post?limit=10`,
  People: () => `https://picsum.photos/id/1005/info`,
  Channels: () => `https://picsum.photos/v2/list?page=3&limit=10`,
};
const headers = new HttpHeaders({
  'app-id': '6036874f4832b7ad6b369ac0',
});

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<any> {
    return this.httpClient
      .get(URL.User(), { headers: headers })
      .pipe(map((res: any) => res));
  }
  getPict(): Observable<any> {
    return this.httpClient.get(URL.Picture()).pipe(
      map((res: any) => res),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
  getData(): Observable<any> {
    return this.httpClient
      .get(URL.Data(), { headers: headers })
      .pipe(map((res: any) => res));
  }
  getphoto(): Observable<any> {
    return this.httpClient.get(URL.People()).pipe(map((res: any) => res));
  }
  getchannel(): Observable<any> {
    return this.httpClient.get(URL.Channels()).pipe(map((res: any) => res));
  }
}
