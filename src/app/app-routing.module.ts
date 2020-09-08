import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './products/add/add.component';
import {ListComponent} from './products/list/list.component';
import {EditComponent} from './products/edit/edit.component';


const routes: Routes = [
  {
    path: '', component: ListComponent
  },
  {
    path: 'add', component: AddComponent
  },
  {
    path: ':id/edit', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
