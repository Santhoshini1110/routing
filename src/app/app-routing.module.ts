import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';
import{AppComponent} from './app.component';


const routes: Routes = [{
  path:'',component:AppComponent,
},
{
  path:'tollywood',component:Child1Component
},
{
  path:'bollywood',component:Child2Component
}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
