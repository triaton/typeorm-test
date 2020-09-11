import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from '../entities/blog.entity';
import { Tag } from '../entities/tag.entity';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Blog, Tag])
  ],
  providers: [BlogService],
  controllers: [BlogController]
})
export class BlogModule {}
