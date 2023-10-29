import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { PostModule } from './community/post/post.module';
import { CommentModule } from './community/comment/comment.module';
import { GroupModule } from './circle/group/group.module';
import { QuestionModule } from './circle/question/question.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    PostModule,
    QuestionModule,
    CommentModule,
    GroupModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
