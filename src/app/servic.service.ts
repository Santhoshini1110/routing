import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicService {
  
  info;

  constructor(private http:HttpClient) { }

   storeData(inf){
     this.info=inf;
   }
   getData()
   {
     return this.info;
   }

}
