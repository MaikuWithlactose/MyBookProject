import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  //@Output() enviarBook = new EventEmitter<Books>()
  constructor (public booksService:BooksService, public toast:ToastrService){}
  
  rellenarFormulario(_title:string, _type:string, _author:string, _price:string, _photo:string, _id_book:string="0")
  {
    
    let newBook: Books;
    newBook = new Books(_title, _type, _author, parseFloat(_price), _photo, parseFloat(_id_book));
    console.log(newBook)
    this.booksService.addBook(newBook);
    
    alert("El libro "+ newBook.title +" ha sido unido al listado de libros prohibidos.")
    this.toast.success("El libro "+ newBook.title +" ha sido unido al listado de libros prohibidos.")
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
