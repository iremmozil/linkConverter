import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

@Entity()
export class Link extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @Optional()
  url: string;

  @Column()
  @IsString()
  @Optional()
  deeplink: string;
}