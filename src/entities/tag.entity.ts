import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { Blog } from './blog.entity';

@Entity('tag')
export class Tag {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Blog, blog => blog.tags)
  blogs: Blog[];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
