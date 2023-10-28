import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../../user/entities/user.entity';

export enum Emotion {
  SUPRISED = 'surprised',
  HAPPY = 'happy',
  SCARED = 'scared',
  SAD = 'sad',
  ANGRY = 'angry',
  REJECTING = 'rejecting',
}

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column({ length: 500 })
  title: string;

  @Column({ length: 512 })
  description: string;

  // @Column()
  // commentAmount: number;

  @Column({
    type: 'enum',
    enum: Emotion,
    default: Emotion.HAPPY,
  })
  emotion: Emotion;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
