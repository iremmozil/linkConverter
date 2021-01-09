
import {
    Controller,
    Get,
    Body,
  } from '@nestjs/common';
  import { UrlService } from './Links.service';
  import { ApiOkResponse, ApiBody } from "@nestjs/swagger";
import { LinkDto } from 'src/link/Link.dto';
  
  @Controller("links")
  export class UrlController{
    constructor(private urlService: UrlService) {}
  
    @Get("/urlToDeeplink")
    @ApiBody({
      type: LinkDto,
    })
    @ApiOkResponse({
      description: "ty://?Page=Home",
      type: LinkDto,
    })
    async convertUrlToDeeplink(@Body() linkDto: LinkDto) {
      return this.urlService.convertUrlToDeeplink(linkDto);
    }

    @Get("/deeplinkToUrl")
    @ApiBody({
      type: LinkDto,
    })
    @ApiOkResponse({
      description: "https://www.trendyol.com",
      type: LinkDto,
    })
    async convertDeeplinkToUrl(@Body() linkDto: LinkDto) {
    }

  }