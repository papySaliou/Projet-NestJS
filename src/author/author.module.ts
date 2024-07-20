// import { Module } from '@nestjs/common';
// import { AuthorController } from './author.controller';
// import { AuthorService } from './author.service';
// import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   imports: [TypeOrmModule.forFeature([Author])],
//   controllers: [AuthorController],
//   providers: [AuthorService]
// })
// export class AuthorModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author.entity';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule {}

