import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseURL: string = "https://localhost:7006/api/Books";

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>(this._baseURL + "/GetBooks");
  }

  addBooks(bk: Book) {

    return this.http.post(this._baseURL + "/AddBook/", bk);

  }

  updateBooks(bk: Book) {

    return this.http.put(this._baseURL + "/UpdateBook/" + bk.id, bk);

  }

  getBookById(id:number) {

    return this.http.get<Book>(this._baseURL + "/GetBookById/" + id);

  }

  deleteBook(id: number) {

    return this.http.delete(this._baseURL + "/DeleteBook/" + id);

  }
}
