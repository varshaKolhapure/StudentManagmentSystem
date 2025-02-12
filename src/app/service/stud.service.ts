import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudService {

  private HOST: string="http://localhost:8084/v1/admin/";

  constructor(private http: HttpClient) { }

  getData(resourceURI:string, options: Options): Observable<any> {
    options = this.setHeaders(options);
    return this.http.get(this.HOST + resourceURI, options);
  }

  insertData(resourceURI:string, body:any, options: Options) : Observable<any>{
    options = this.setHeaders(options);
    return this.http.post(this.HOST + resourceURI, body, options);
  }

  updateData(resourceURI:string, body:any, options: Options) {
    options = this.setHeaders(options);
    return this.http.put(this.HOST + resourceURI, body, options);
  }

  deleteData(resourceURI:string, options: Options) {
    options = this.setHeaders(options);
    return this.http.delete(this.HOST + resourceURI, options);
  }

  private setHeaders(options:Options) {
    if (!options)
      options = new Options();
    if (sessionStorage.getItem('access-token')) {
      options.headers['access-token'] = sessionStorage.getItem('access-token');
    }
    return options;
  }

}

export class Options {
  params: any;
  headers: any;
  observe: any;
  constructor() {
    this.params = {};
    this.headers = {};
    this.observe = 'body';
  }
}
