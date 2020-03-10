import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsListComponent} from './items-list/items-list.component';
import {ItemComponent} from './item/item.component';


const routes: Routes = [
  {path: '', component: ItemsListComponent},
  {path: ':itemNo', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
