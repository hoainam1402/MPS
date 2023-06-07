import { BaseRepository } from "./base/Base";
import  context  from '../common/consts/MConstant';
import  config  from '@/common/config/config';

class AuthRepository extends BaseRepository {

    constructor(){
        super(context.Services.Auth);
    }

    async login(loginData, onSuccess, onFailure) {
        try {
            const response = await this._repository.post(`${this.resource}/${config.APIEndPoint.LOGIN}`, loginData);
            if (onSuccess && response.status === 200) {
              onSuccess(response);
            }
            return response.data;
          } catch (error) {
            this.handleOnError(error, onFailure);
          }
    }

}

export {AuthRepository};
