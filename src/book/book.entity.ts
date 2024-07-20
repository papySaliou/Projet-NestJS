import { Author } from 'src/author/author.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  publicationDate: string;

  @ManyToOne(() => Author, author => author.books)
  author: Author;
}