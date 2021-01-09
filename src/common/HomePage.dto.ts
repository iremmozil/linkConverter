export class HomePageDto {

    link: string;
  
    constructor(isUrl: boolean) {
        if(isUrl) {
            this.link = "https://www.trendyol.com";
        } else {
            this.link = "ty://?Page=Home";
        }
    }
  
    public getDeeplink(): string {
        return "ty://?Page=Home";
    }
}
  