import { IBookRepository } from "../../repository/IBookRepository";
import { IBookInfo } from "../../repository/IBookRepository";



export class CreateBookUseCase {

  constructor(private bookRepository: IBookRepository) { }

  execute({ name, description, autor }: IBookInfo) {

    const verifyBookAlreadyExists = this.bookRepository.findByName(name)
    if (verifyBookAlreadyExists) {

      throw new Error("This book already exists")
    }

    const newBook = this.bookRepository.create({ name, description, autor })
    return newBook
  }
}