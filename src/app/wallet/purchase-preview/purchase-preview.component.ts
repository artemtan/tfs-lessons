import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Purchase} from '../../model/purchase';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const digitRegex = /^\d*\.?\d+$/;

@Component({
  selector: 'tfs-purchase-preview',
  templateUrl: './purchase-preview.component.html',
  styleUrls: ['./purchase-preview.component.css']
})
export class PurchasePreviewComponent implements OnInit, OnChanges {
  //editForm: FormGroup;
  @Input() purchase: Purchase;
  @Input() isOpen: boolean;
  @Input() getErrors;
  @Output() previewClick = new EventEmitter();
  @Output() previewDelete = new EventEmitter();
  @Output() edit = new EventEmitter<Purchase>();
  isEdit = false;

  constructor(private formBuilder: FormBuilder) {
  }

  // getErrors(errors: any): string {
  //   if (errors['required']) {
  //     return 'поле обязательно для заполнения';
  //   }
  //
  //   if (errors['min']) {
  //     return `минимальное значение ${errors['min']['min']}`;
  //   }
  //
  //   if (errors['max']) {
  //     return `максимальное значение ${errors['max']['max']}`;
  //   }
  //
  //   if (errors['minlength']) {
  //     return `минимальная длина — ${errors['minlength']['requiredLength']}`;
  //   }
  //
  //   if (errors['maxlength']) {
  //     return `максимальная длина — ${errors['maxlength']['requiredLength']}`;
  //   }
  //
  //   if (errors['pattern'] && errors['pattern']['requiredPattern'] === digitRegex.toString()) {
  //     return `разрешены лишь цифры`;
  //   }
  // }

  ngOnInit() {
  //   this.editForm = this.formBuilder.group({
  //     title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
  //     price: ['', [Validators.required, Validators.min(10), Validators.max(1000000), Validators.pattern(digitRegex)]],
  //     date: [''],
  //     comment: ['']
  //   });
  }

  ngOnChanges() {

  }

  onClick() {
    this.previewClick.emit();
  }

  onDeleteClick(event: MouseEvent) {
    event.stopPropagation();

    this.previewDelete.emit();
  }

  onEditPurchase() {

  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  onEditClick() {
    this.toggleEdit();
  }

  // onSubmit() {
  //   const price = parseFloat(this.editForm.value.price);
  //
  //   if (!isFinite(price) || this.editForm.invalid) {
  //     return;
  //   }
  //
  //   const date = this.editForm.value.date
  //     ? new Date(this.editForm.value.date)
  //     : new Date();
  //
  //   const new_purchase: Purchase = {
  //     title: this.editForm.value.title,
  //     price: Math.floor(price * 100) / 100,
  //     date: date.toISOString()
  //   };
  //
  //   if (this.editForm.value.comment) {
  //     new_purchase.comment = this.editForm.value.comment;
  //   }
  //
  //   this.edit.emit(new_purchase);
  // }
}
