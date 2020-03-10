import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemModel} from '../item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  form: FormGroup;

  @Output() close: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      itemNo: null,
      name: [null, Validators.required],
      amount: 0,
      inventoryCode: [null, Validators.required]
    });
  }

  handleClose() {
    this.close.emit();
  }

  handleSave() {
    this.close.emit(this.form.value);
  }
}
