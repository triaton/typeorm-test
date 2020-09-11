import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from './tag.entity';

@Entity('blog')
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Tag, tag => tag.blogs)
  @JoinTable()
  tags: Tag[];

  @Column()
  content: string;

  constructor(content: string, tags: Tag[]) {
    this.content = content;
    this.tags = tags;
  }
}
