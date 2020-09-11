import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from '../entities/blog.entity';
import { Repository } from 'typeorm';
import { Tag } from '../entities/tag.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) { }

  async seed(): Promise<Blog[]> {
    const tagA = await this.tagRepository.save(new Tag('A', 'TAG-A'));
    const tagB = await this.tagRepository.save(new Tag('B', 'TAG-B'));
    const tagC = await this.tagRepository.save(new Tag('C', 'TAG-C'));
    const blog1 = new Blog('content with tags - A, B, C', [tagA, tagB, tagC]);
    const blog2 = new Blog('content with tags - A', [tagA]);
    const blog3 = new Blog('content with tags - B', [tagB]);
    const blog4 = new Blog('content with tags - A, B', [tagA, tagB]);
    const blog5 = new Blog('content with tags - A, C', [tagA, tagC]);
    const blog6 = new Blog('content with tags - B, C', [tagB, tagC]);
    return this.blogRepository.save([blog1, blog2, blog3, blog4, blog5, blog5, blog6]);
  }

  async filter(): Promise<[Blog[], number]> {
    const tags = ['A', 'B'];
    return this.blogRepository.createQueryBuilder('blog')
      .leftJoinAndSelect('blog.tags', 'tags')
      .where('tags.id in (:...tags)', { tags })
      .getManyAndCount();
  }
}
