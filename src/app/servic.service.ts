import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicService {
  url=" http://www.omdbapi.com/?i=tt3896198&apikey=4311c958&t=";
  result;

  constructor(private http:HttpClient) { }

  getData(movie):Observable<any>
  {
   this.result=this.http.get(this.url+movie);
   return this.result;
  }

}
