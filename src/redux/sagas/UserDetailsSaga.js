import {
    takeLatest,
    all,
    call,
    put,
} from 'redux-saga/effects';
import {setUserName} from '../slices/UserDetailsSlice';
import { httpCall,REGISTER_USER_URL } from '../../utils/api';
import {toast} from 'react-toastify';
// import {AUTH_USER_CG_TOKEN_KEY} from '../../utils/constant';
var qs = require('qs');
export function* RegisterUser(payload){
    const {params}=payload;
    var data = qs.stringify(params);

    const adduserUrl=`${process.env.REACT_APP_BASEURL}${REGISTER_USER_URL}`;
    try{
        const addUserValues=yield call(httpCall,{
            url:adduserUrl,
            method:'POST',
            headers:{ 
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            data:data
        });
        if(addUserValues && addUserValues.success){
            toast.success('User Created Successfuly');
            yield put(setUserName(addUserValues.data));
        }else if(addUserValues.err.status===409){
            let message=addUserValues.err.data;
            toast.error(message);
        }
    }
    catch(err){
        console.log(err);
    }
}
// export function* LoginUser(params){
//     try{
//         // console.log(params);
//         const {postData}=params;
//         console.log(postData);
//         var data = qs.stringify(postData);
//     const adduserUrl=`${process.env.REACT_APP_BASEURL}${LOGIN_URL}`;
//         const addUserValues=yield call(httpCall,{
//             url:adduserUrl,
//             method:'POST',
//             headers:{ 
//                 'Content-Type': 'application/x-www-form-urlencoded'
//               },
//             data:data
//         });
//         if(addUserValues && addUserValues.success){
//             const {token}=addUserValues.data
//             sessionStorage.setItem('AUTH_USER_CG_TOKEN_KEY',token)
//             yield put(setLogedUserDetails(addUserValues.data));
//         }
//     }
//     catch(err){
//         console.log(err);
//     }
// }

export function* watchUserDetailsSaga(){
    yield takeLatest('REGISTER_USER',RegisterUser);
    // yield takeLatest('LOGIN_USER',LoginUser);
}

export default function* UserDetailsSaga(){
    yield all([watchUserDetailsSaga()]);
}