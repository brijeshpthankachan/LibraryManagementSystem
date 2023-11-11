import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown'
import { InputTextModule } from 'primeng/inputtext'
import { MultiSelectModule } from 'primeng/multiselect'
import { TableModule } from 'primeng/table'
import { TagModule } from 'primeng/tag'
import { NewBookComponent } from "./new-book.component"
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-book-management',
  standalone: true,
  templateUrl: './book-management.component.html',
  imports: [CommonModule, TableModule, MultiSelectModule, DropdownModule, TagModule, ButtonModule, InputTextModule, NewBookComponent, TranslateModule]
})
export class BookManagementComponent {

  book = [
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "published_year": 1925,
      "genre": "Fiction",
      "isbn": "978-0-7432-7356-5"
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "published_year": 1960,
      "genre": "Fiction",
      "isbn": "978-0-06-112008-4"
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "published_year": 1951,
      "genre": "Fiction",
      "isbn": "978-0-316-76948-0"
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "published_year": 1937,
      "genre": "Fantasy",
      "isbn": "978-0-261-10295-2"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "published_year": 1949,
      "genre": "Dystopian Fiction",
      "isbn": "978-0-452-28423-4"
    }
  ]

  isNewBookDialogVisible = false

  openNewBookDialog() {
    this.isNewBookDialogVisible = true
  }
}
