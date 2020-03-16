import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {ServicService}  from '../servic.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  movie:string;
  data;
 constructor(private httpclient:HttpClient ,private servic:ServicService,private route:Router)  { }
  
  ngOnInit(): void {
  }
   
  submit() {
    this.servic.getData(this.movie).subscribe(data=>{
      if(data.length){
        this.data=data;
      }
    })
  }
}

