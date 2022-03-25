import { Request, response, Response } from 'express'
import { CreateBookUseCase } from './CreateBookUseCase'

export class CreateBookController {

  constructor(private bookUseCase: CreateBookUseCase) { }

  handle(request: Request, response: Response): Response {

    const { name, description, autor } = request.body

    try {

      const book = this.bookUseCase.execute({ name, description, autor })
      return response.status(201).json(book)

    } catch (exception) {
      return response.status(400).json(`${exception}`)
    }


  }
}