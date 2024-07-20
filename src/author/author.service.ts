import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorService {
    constructor(

        @InjectRepository(Author)
        private authorRepository: Repository<Author>,){}

        findAll(): Promise<Author[]> {
            return this.authorRepository.find()
          }
        
          findOne(id: number): Promise<Author> {
            return this.authorRepository.findOneBy({ id })
          }
        
          create(book: Author): Promise<Author> {
            return this.authorRepository.save(book)
          }
        
          async update(id: number, updateBookDto: Partial<Author>): Promise<Author> {
            await this.authorRepository.update(id, updateBookDto)
            return this.authorRepository.findOneBy({ id })
          }
        
          async remove(id: number): Promise<void> {
            await this.authorRepository.delete(id)
          }

    
}
