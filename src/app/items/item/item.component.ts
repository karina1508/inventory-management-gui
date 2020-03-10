import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../items.service';
import {ActivatedRoute} from '@angular/router';
import {ItemModel} from '../item.model';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Observable<ItemModel>;

  changeAmount = 1;

  constructor(private service: ItemsService,
              private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.item = this.route.params.pipe(
      switchMap(params => this.service.getItem(params.itemNo))
    );
  }


  depositItem(item: ItemModel) {
    this.item = this.service.depositItem(item.itemNo, this.changeAmount);
  }

  withdrawalItem(item: ItemModel) {
    this.item = this.service.withdrawalItem(item.itemNo, this.changeAmount);
  }

  navigateBack() {
    this.location.back();
  }
}
