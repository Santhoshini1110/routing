import { Component, OnInit } from '@angular/core';
import{ServicService} from '../servic.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
data;
  constructor(private serv:ServicService ) { }

  ngOnInit(): void {
    this.data=this.serv.getData();
  }

}
