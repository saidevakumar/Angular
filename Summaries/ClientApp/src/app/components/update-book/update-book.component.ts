import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book!: Book;
  updateBookForm!: FormGroup;

  constructor(private service: BookService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
      this.book = data;

      console.log(data);

      this.updateBookForm = this.fb.group({
        id: [data.id],
        title: [data.title],
        author: [data.author],
        description: [data.description],
        rate: [data.rate],
        dateStart: [data.dateStart],
        dateRead: [data.dateRead],
      })

    })
  }

  formatDate(date?: Date) {
    if (date) {
      return new Date(date).toISOString().substring(0, 10);
    }
    else {
      return "";
    }
  }

  onSubmit() {
    this.service.updateBooks(this.updateBookForm.value).subscribe(data => {
      this.router.navigate(["/books"])
    })
  }
}
