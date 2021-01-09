import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from './Link.entity';
import { LinkDto } from 'src/link/Link.dto';
import { ProductPageDto } from 'src/common/ProductPage.dto';
import { HomePageDto } from 'src/common/HomePage.dto';
import { urlIdentifier, } from 'src/common/constants';
import { SearchPageDto } from 'src/common/SearchPage.dto';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Link) private linksRepository: Repository<Link>,
  ) {}
  async convertUrlToDeeplink(linkDto: LinkDto): Promise<Link[]> {
    const linkList = await this.linksRepository.find({ where: { url: linkDto.link } });
    if(linkList.length) {
      return linkList;
    }
    const link = new Link();
    link.url = linkDto.link;

    const pageType = this.findPageType(link.url);
    link.deeplink = pageType.getDeeplink();
    return await this.linksRepository.save([link]);
  }

  private findPageType( url: string ): any {
    if(url.includes(urlIdentifier.product)) {
      return new ProductPageDto(url.split(urlIdentifier.home)[1], true);
    }
    else if(url.includes(urlIdentifier.search)) {
      return new SearchPageDto(url.split(urlIdentifier.home + urlIdentifier.search + urlIdentifier.query)[1]);
    }
    else {
      return new HomePageDto(true);
    }
  }

}