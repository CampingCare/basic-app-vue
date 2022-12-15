import axios from "axios" ;
import jwt_decode from "jwt-decode";

class Api {

    authtoken: string|null = null;
    refreshToken: string|null = null;
    idToken: string|null = null;

    adminId: number|null = null;
    endpoint: String;

    query: Object|null = null;

    constructor() {

        this.query = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });

        this.authtoken = this.query.authtoken ;
        this.adminId = this.query.admin_id ;
        this.endpoint = 'https://api.camping.care/v21';

    }

    get = async (path, params = {}) => {
        
        let config = await this.getConfig(); 

        try {

            config.params = params ;

            return axios.get(this.endpoint+path, config) ;
        }
        catch(error) {
            throw new Error(error);
        }

    }

    post = async (path, data = {}) => {
        
        let config = await this.getConfig(); 

        try {
            return axios.post(this.endpoint+path, data, config) ;
        }
        catch(error) {
            throw new Error(error);
        }

    }

    del = async (path) => {
    
    let config = await this.getConfig() ; 

        try {
            return axios.delete(this.endpoint+path, config) ;
        }
        catch(error) {
            throw new Error(error);
        }

    }

    put = async (path, data = {}) => {
    
        let config = await this.getConfig(); 

        try {
            return axios.put(this.endpoint+path, data, config) ;
        }
        catch(error) {
            throw new Error(error);
        }

    }

    getConfig = async () => {

        let headers = {} ;

        if(this.idToken != null){

            if(this.verifyToken(this.idToken) == false){
   
                let tokens = await this.getRefreshToken() ;

                this.idToken = tokens.id_token ;

            }
            
        }else if(this.authtoken != null){

            let tokens = await this.getToken() ;

            this.refreshToken = tokens.refreshToken ;
            this.idToken = tokens.idToken ;

        }

        headers["Authorization"] = "Bearer " + this.idToken ;

        if(this.adminId != null && this.adminId > 0){
            headers["X-Admin-Id"] = this.adminId ;
        }

        if(process.env.NODE_ENV === 'development'){
            headers["X-Debug"] = 1 ;
        }

        return {
            headers    
        } ;

    }

    verifyToken = (idToken) => {

        if(idToken == null){
            return false ; 
        }

        var decodedJWT = jwt_decode(idToken);

        if((decodedJWT.exp - Math.floor(Date.now() / 1000)) < 5){
            
            return false ;

        }

        return true ;

    }

    getUserUid = (authtoken) => {
        
        let authInfo = jwt_decode(authtoken) ;
        
        return authInfo.uid ;

    }

    getToken = async () => {

        try {

            let results = await axios.post(this.endpoint+'/oauth/token', { auth_token: this.authtoken }) ;

            return results.data ;

        } catch (error) {
            throw new Error(error);
            
        }    

    }

    getRefreshToken = async () => {

        try {

            let results = await axios.post(this.endpoint+'/oauth/refresh_token', { refresh_token: this.refreshToken }) ;

            return results.data ;

        } catch (error) {
            throw new Error(error);
        }    

    }

}

export default new Api()  ;