import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
  
  @Get()
  findAll(): Promise<Author[]> {
    return this.authorService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Author> {
    return this.authorService.findOne(id)
  }

  @Post()
  create(@Body() createBookDto: Author): Promise<Author> {
    return this.authorService.create(createBookDto)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateBookDto: Partial<Author>
  ): Promise<Author> {
    return this.authorService.update(id, updateBookDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.authorService.remove(id)
  }

  // constructor(private readonly authorService: AuthorService) {}

  // @Get()
  // findAll(): Promise<Author[]> {
  //   return this.authorService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<Author> {
  //   return this.authorService.findOne(+id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.authorService.remove(+id);
  // }
}
