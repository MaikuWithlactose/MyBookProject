import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  localbooks: Books[] = []

  constructor(public booksService: BooksService, public toast: ToastrService) {
    this.fetchBooks();
  }

  async fetchBooks() {
    try {
      this.localbooks = await this.booksService.getAll();
    } catch (error) {
      console.error(error);
    }
  }

  async findBook(findValue: string) {

    if (findValue.length > 0) {
      let findedBook = this.booksService.getOne(parseFloat(findValue));
      if (findedBook != undefined) {
        alert("Invocando libro REF : " + findValue)
        debugger
        this.localbooks = [];
        this.localbooks.push(await findedBook);
        return []
      }
      else {
        alert("Invocacion de libro fallida, no se ha encontrado : " + findValue)
        return false;
      }
    }
    else {
      alert("Valor de invocacion vacío, reiniciando listado.")
      this.fetchBooks();
      return false;
    }
  }

  async removeCard(book: Books) {

    let Check = await this.booksService.deleteBook(book.id_book)

    if (Check === true) {
      alert('Se ha desterrado este libro con éxito : ' + book.title);
      this.toast.success('Se ha desterrado este libro con éxito : ' + book.title, "EXITO", { positionClass: 'toast-top-right' });
    }
    else {
      this.toast.error("Ha habido un error con el destierro de este libro : " + book.title, "ERROR", { positionClass: 'toast-top-right' })
    }

    this.fetchBooks();
      
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
