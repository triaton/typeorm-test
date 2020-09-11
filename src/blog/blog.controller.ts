import { Controller, Get, Post } from '@nestjs/common';
import { Blog } from '../entities/blog.entity';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {

  constructor(
    private blogService: BlogService,
  ) {
  }

  @Post('init')
  init(): Promise<Blog[]> {
    return this.blogService.seed();
  }

  @Get('filter')
  filter(): Promise<[Blog[], number]> {
    return this.blogService.filter();
  }
}
