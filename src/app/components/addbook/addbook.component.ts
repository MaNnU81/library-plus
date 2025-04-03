import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-addbook',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.scss'
})
export class AddbookComponent {
  bookService = inject(BookService)

  applyForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    summary: new FormControl(''),
    image: new FormControl(''),
    subject: new FormControl('')
  })

  submitAddBook() {
    const storedBooks = localStorage.getItem('arraybooks');
    const books = storedBooks ? JSON.parse(storedBooks) : [];
  
    const newId = books.length > 0 ? Math.max(...books.map((book: any) => book.id)) + 1 : 1;
    
    this.bookService.submitBook(
      newId,
      this.applyForm.value.title ?? '',
      this.applyForm.value.author ?? '',
      this.applyForm.value.summary ?? '',
      this.applyForm.value.image ?? '',
      this.applyForm.value.subject ?? ''
    )
  }
}
