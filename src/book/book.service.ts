  import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { Book } from './book.entity';
  @Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}
  
  findAll(): Promise<Book[]> {
    return this.booksRepository.find({ relations: ['author'] });
  }

  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOne({ where: { id }, relations: ['author'] });
  }

  create(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async update(id: number, updateBookDto: Partial<Book>): Promise<Book> {
    await this.booksRepository.update(id, updateBookDto);
    return this.booksRepository.findOne({ where: { id }, relations: ['author'] });
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
  }
