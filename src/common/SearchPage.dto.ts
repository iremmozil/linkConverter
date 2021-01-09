
export class SearchPageDto {

    query: string;
  
    constructor(query: string) {
        this.query = query;
    }
  
    public getDeeplink(): string {
        const query = this.query ? this.query : "";
        const deeplink = "ty://?Page=Search&Query=" + query;
        return deeplink;
    }
  }
  