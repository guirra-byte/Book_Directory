import { IBookRepository } from "../../repository/IBookRepository";

export class ListBookUseCase {

  constructor(private bookRepository: IBookRepository) { }

  execute() {

    const returnListBook = this.bookRepository.list()
    return returnListBook
  }
}