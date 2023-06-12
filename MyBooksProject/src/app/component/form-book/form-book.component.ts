import { Component, EventEmitter, Output } from '@angular/core';
import { Books } from 'src/app/models/books';


@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent {
  @Output() enviarBook = new EventEmitter<Books>()

  rellenarFormulario(_title:string, _type:string, _author:string, _price:string, _photo:string, _id_book:string="0")
  {
    let newBook: Books;
    newBook = new Books(_title, _type, _author, parseFloat(_price), _photo, parseFloat(_id_book));
    this.enviarBook.emit(newBook);
  }
  

  soloNumeros(event: any) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
  
    // Remover letras y comas del valor del input
    const newValue = inputValue.replace(/[a-zA-Z,]/g, '');
    // Actualizar el valor del input sin letras y comas
    input.value = newValue;
  }

}