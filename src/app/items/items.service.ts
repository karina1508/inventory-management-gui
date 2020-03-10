import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemModel} from './item.model';

@Injectable()
export class ItemsService {

  url = 'api';

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(`${this.url}/items`);
  }

  deleteItem(itemNo: bigint) {
    return this.http.delete(`${this.url}/item/${itemNo}`);
  }

  getItem(itemNo: bigint) {
    return this.http.get(`${this.url}/item-by-number/${itemNo}`);
  }

  withdrawalItem(itemNo: bigint, amount: number) {
    return this.http.put(`${this.url}/withdrawal-item/${itemNo}/${amount}`, null);
  }

  depositItem(itemNo: bigint, amount: number) {
    return this.http.put(`${this.url}/deposit-item/${itemNo}/${amount}`, null);
  }

  addItem(item: ItemModel) {
    return this.http.post(`${this.url}/item`, item);
  }
}
