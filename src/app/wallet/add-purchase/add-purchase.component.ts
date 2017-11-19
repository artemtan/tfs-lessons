import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Purchase} from '../../model/purchase';

@Component({
  selector: 'tfs-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
  form: FormGroup;
  @Output() addPurchase = new EventEmitter<Purchase>()

  errMsgs = {
    title: {
      required: 'поле обязательно для заполнения',
      minlength: 'минимальная длина — 3',
      maxlength: 'максимальная длина — 80'
    },
    price: {
      required: 'поле обязательно для заполнения',
      min: 'минимальное значение 10',
      max: 'максимальное значение 1000000',
      pattern: 'разрешены лишь цифры'
    }
  };

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      price: ['', [Validators.required, Validators.min(10), Validators.max(1000000), Validators.pattern(/\d*\.?\d+/)]],
      date: [''],
      comment: [''],
    });
  }

  validatorMessages(field: string) {
    const errors = this.form.get(field).errors;
    const msgs = this.errMsgs[field];
    const res = [];
    for (const key in errors) {
      res.push(msgs[key]);
    }
    return res;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    let price = parseFloat(this.form.value.price);
    let date = new Date();

    if (isNaN(price)) {
      return;
    }

    price = Math.floor((price) * 100) / 100;

    if (this.form.value.date) {
      date = new Date(this.form.value.date);
    }

    const purchase: Purchase = {
      title: this.form.value.title,
      price: price,
      date: date
    };

    if (this.form.value.comment) {
      purchase.comment = this.form.value.comment;
    }

    this.addPurchase.emit(purchase);
  }
}
