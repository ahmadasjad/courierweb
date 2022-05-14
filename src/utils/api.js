import axios from 'axios';

export const httpCall =async config =>{
    let headerConfig;
    if(config && config.headers){
        headerConfig={
            ...config,
            headers:{
                ...config.headers,
                'Cache-Control':'no-store,no-cache,',
                Pragma:'no-cache',
            },
        };
    } else{
        headerConfig ={
            ...config,
            headers:{
                'Cache-Control':'no-store,no-cache,',
                Pragma:'no-cache',
            }
        };
    }
    try{
        const response=await axios(headerConfig);
        return {
            success:true,
            data:response.data,
        };
    }
    catch (err){
        return {success:false,
            err:err.response
        };
    }
};

///// User apis---------------------
export const REGISTER_USER_URL='/users/registerUser';