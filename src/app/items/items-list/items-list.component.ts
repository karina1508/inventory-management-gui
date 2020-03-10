import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../items.service';
import {ItemModel} from '../item.model';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Observable<ItemModel[]>;
  ifEditOpened = false;

  constructor(private service: ItemsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.items = this.service.getItems();
  }

  deleteItem(itemNo: bigint) {
    const subscription = this.service.deleteItem(itemNo)
      .subscribe(res => {
        subscription.unsubscribe();
        this.getData();
      }, err => console.error(err));
  }

  navigateToItem(item: ItemModel) {
    this.router.navigate([item.itemNo], {relativeTo: this.route});
  }

  closeEdit(item?: ItemModel) {
    if (item) {
      const subscription = this.service.addItem(item).subscribe(
        res => {
          subscription.unsubscribe();
          this.getData();
        }
      );
    }
    this.ifEditOpened = false;

  }

  openEdit() {
    this.ifEditOpened = true;
  }
}
