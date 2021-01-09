import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";

export class LinkDto {
  @ApiProperty({
    description: "The link that provided either an url or deeplink",
    example: "https://www.trendyol.com",
  })
  @IsDefined()
  readonly link: string;

}
