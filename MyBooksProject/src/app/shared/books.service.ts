import axios from 'axios';
import { Books } from '../models/books';


const API_URL = "http://localhost:3000";

export class BooksService {

  constructor() { }


 async getAll() {
    try {
      let URL_GETALL = API_URL+"/books"
      const response = await axios.get(URL_GETALL);
      return response.data.book;

    } catch (error) {
      console.error("Error fetching all books:", error);
      return error;
    }
  }

 async getOne(id_libro: number) {
    try {
      let URL_GETONE = API_URL+"/books/"+id_libro
      const response = await axios.get(URL_GETONE);

      return response.data.book;

    } catch (error) {
      console.error("Error fetching book with ID :"+id_libro, error);
      return error;
    }
  }

  async addBook(book: Books) {
      try {
      let URL_ADD = API_URL+"/books"
      const response = await axios.post(URL_ADD, book);
      return response.data;

    } catch (error) {
      console.error("Error adding book:", error);
      return error;
    }
  }

  async editBook(book: Books) {
    try {
      let URL_EDIT = API_URL+"/books/"
      const response = await axios.put(URL_EDIT, book);

      return true;
    } catch (error) {
      console.error(`Error editing book with ID `, error);

      return false;
    }
  }

  async deleteBook(id_book: number) {
    try {
      let URL_DELETE = API_URL+"/books/"+id_book
      const response = await axios.delete(URL_DELETE);

      return true;

    } catch (error) {
      console.error(`Error deleting book with ID `, error);
      return false;
    }
  }  
}