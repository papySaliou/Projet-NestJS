import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BooksModule } from './book/book.module'
import { AuthorModule } from './author/author.module';
import { Book } from './book/book.entity';
import { Author } from './author/author.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'library',
      // autoLoadEntities: true,
      entities:[Book, Author],
      synchronize: true,
    }),
    BooksModule,
    AuthorModule,
  ],
})
export class AppModule {}