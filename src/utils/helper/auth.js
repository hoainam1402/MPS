import jwtDecode from "jwt-decode";
import cookie from "../../common/cookie"

export default {

    isAuthenticated : () => {
        let token = cookie.getCookie('token') || '';
        if(!token){
            return false;
        }

        let expiredTokenTime = jwtDecode(token)?.exp;

        return false;

    }
}