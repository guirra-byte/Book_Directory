import { IBookRepository } from "../../repository/IBookRepository";

export class DeleteBookUseCase {

  constructor(private bookRepository: IBookRepository) { }
  execute(name: string) {

    const verifyBookExists = this.bookRepository.findByName(name)

    if (verifyBookExists) {

      const deleteBook = this.bookRepository.deleteBook(name)
      return deleteBook
    }

    throw new Error("An uncreated book cannot be deleted")
  }
}