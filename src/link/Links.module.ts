
import { Module } from '@nestjs/common';
import { UrlService } from './Links.service';
import { UrlController } from './Links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './Link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  providers: [UrlService],
  controllers: [UrlController],
})
export class UrlModule {}