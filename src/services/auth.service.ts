import { api } from "./base.service";
import { CommonService } from "./common.service";
import { storageService } from "./storage.service";

class AuthService extends CommonService
{
    public constructor()
    {
        super(api, storageService)
    }
}

export default new AuthService