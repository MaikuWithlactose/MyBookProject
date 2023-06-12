import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: any;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  deleteCard() {
    // Emitir el evento de eliminación junto con la información del libro
    this.delete.emit(this.book);
  }
}
