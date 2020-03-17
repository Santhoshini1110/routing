import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
import { ServicService } from './servic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
name:string;
result;
url=" http://www.omdbapi.com/?i=tt3896198&apikey=4311c958&t=";
constructor(private http:HttpClient,private serv:ServicService,private router:Router)
{

}
ngOnInit(){}
submit()
{
this.http.get(this.url+this.name).subscribe((data)=>{
  this.router.navigate['/'];
  this.result=data;
  console.log(this.result);
  this.serv.storeData(this.result);
})
}
}