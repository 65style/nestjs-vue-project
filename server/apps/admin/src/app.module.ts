import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { CoursesController } from './courses/courses.controller';

@Module({
  imports: [DbModule, UsersModule, CoursesModule, EpisodesModule],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}