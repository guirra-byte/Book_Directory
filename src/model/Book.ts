import { v4 as uuidV4 } from 'uuid'

export class Book {
  name: string
  description: string
  created_at: Date
  id?: string
  autor: string
  update_at?: Date

  constructor() {

    if (!this.id) {

      this.id = uuidV4()
      this.created_at = new Date()
    }
  }
}