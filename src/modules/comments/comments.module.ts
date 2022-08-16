import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './comments.controller';
import { Comment } from './comments.entity';

/**
 * TODO
 * You will probably need to add providers and/or imports to this module in order to complete your task
 */
@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  controllers: [CommentController],
  providers: [
    /** TODO implement */
  ],
})
export class CommentModule {}
