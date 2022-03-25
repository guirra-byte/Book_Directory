import { Book } from "../model/Book"


export interface IBookInfo {
  name: string
  description: string
  autor: string
}

export interface IBookRepository {
  findByName(name: string): Book
  create(book: IBookInfo): any
  list(): Book[]
  deleteBook(name: string): any

}