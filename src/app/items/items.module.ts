import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemsRoutingModule} from './items-routing.module';
import {ItemsListComponent} from './items-list/items-list.component';
import {ItemsService} from './items.service';
import {ItemComponent} from './item/item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemEditComponent} from './item-edit/item-edit.component';


@NgModule({
  declarations: [ItemsListComponent, ItemComponent, ItemEditComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ItemsService]
})
export class ItemsModule {
}
