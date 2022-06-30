import { BaseService, api } from "./base.service";
import { StorageService, storageService } from "./storage.service";

export class CommonService
{
    constructor(public api: BaseService, public storageService: StorageService){}
}

export const commonService = new CommonService(api, storageService)