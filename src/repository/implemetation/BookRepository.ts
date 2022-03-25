import { Book } from "../../model/Book";
import { IBookInfo } from "../IBookRepository";
import { IBookRepository } from "../IBookRepository";

export class BookRepository implements IBookRepository {

  private books: Book[]

  private static INSTANCE: BookRepository

  private constructor() {
    this.books = []
  }

  public static getInstance(): BookRepository {

    if (!BookRepository.INSTANCE) {

      BookRepository.INSTANCE = new BookRepository
    }

    return BookRepository.INSTANCE
  }

  findByName(name: string): Book {

    const verifyName = this.books.find(nameIndex => nameIndex.name === name)
    return verifyName
  }

  create({ name, description, autor }: IBookInfo) {

    const newBook = new Book()

    Object.assign(newBook, {
      name,
      description,
      autor
    })

    this.books.push(newBook)
  }

  list(): Book[] {

    return this.books
  }

  deleteBook(name: string) {

    const takeBookNameIndex = this.books.findIndex(nameIndex => name === nameIndex.name)

    if (takeBookNameIndex) {
      return this.books.splice(takeBookNameIndex)
    }

  }
}

/*updateBook(name: string, forUpdate: string, book: Book): Book | undefined {

  const whatUpdate = forUpdate
  const newValue = name
  let bookProperties = book

  bookProperties.update_at = new Date()

  switch (whatUpdate) {
    case "name":
      let getProperties = this.books.find(book => whatUpdate === book.name)

      if (!getProperties) {
        return getProperties
      }

      getProperties.name = newValue
      return getProperties


    case "decription":
      getProperties = this.books.find(book => whatUpdate === book.description)

      if (!getProperties) {
        return getProperties
      }

      getProperties.description = newValue
      return getProperties


    case "autor":
      getProperties = this.books.find(book => whatUpdate === book.autor)

      if (!getProperties) {
        return getProperties
      }

      getProperties.autor = newValue
      return getProperties
  }

}
}**/