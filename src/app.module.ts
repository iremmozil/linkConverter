import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { UrlModule } from './link/Links.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UrlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
