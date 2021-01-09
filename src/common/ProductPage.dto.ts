
export class ProductPageDto {
  
  brandName?: string;

  productName?: string;

  contentId: string;

  boutiqueId?: string;

  merchantId?: string;

  campaignId?: string;

  constructor(params: string, isUrl: boolean) {
    if(isUrl) {
      this.brandName = params.substring(0, params.lastIndexOf("/"));
      this.productName = params.substring(params.lastIndexOf("/") + 1, params.lastIndexOf("-p-"));
      this.contentId = params.substring(params.lastIndexOf("-p-") + 3, ( params.includes("?") ? params.lastIndexOf("?") : params.length));
      this.boutiqueId = params.includes("boutiqueId") ? this.getOnlyId(params.split("boutiqueId=")[1]) : undefined;
      this.merchantId = params.includes("merchantId") ? this.getOnlyId(params.split("merchantId=")[1]) : undefined;
      this.campaignId = this.boutiqueId;
    } else {
      this.contentId = params.substring(params.lastIndexOf("ContentId=") + "ContentId=".length, 
                                       (params.includes("CampaignId" || "MerchantId" ) ? params.indexOf("&") : params.length));
      this.campaignId = params.includes("CampaignId") ? this.getOnlyId(params.split("CampaignId=")[1]) : undefined;
      this.merchantId = params.includes("MerchantId") ? this.getOnlyId(params.split("MerchantId=")[1]) : undefined;
      this.boutiqueId = this.campaignId;
      this.brandName  = "brand";
      this.productName = "name";
    }
  }

  public getDeeplink(): string {
    this.campaignId = this.campaignId ? "&CampaignId=" + this.campaignId : "";
    this.merchantId = this.merchantId ? "&MerchantId=" + this.merchantId : "";
    const deeplink = "ty://?Page=Product&ContentId=" + this.contentId + this.campaignId + this.merchantId;
    return deeplink;
  }

  private getOnlyId(restOfstring: string): string {
    if(restOfstring.includes("&")) {
      return restOfstring.split("&")[0];
    }
    return restOfstring;
  }
}
