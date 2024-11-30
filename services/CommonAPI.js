import axios from 'axios'

export const commonAPI = async(httpMethod,url,reqbody,reHeader)=>{
    const reqConfig={
    method:httpMethod,
    url:url,
    data:reqbody,
    headers: reHeader?reHeader:{
        "Content-Type":"application/json"
    }
}
return await axios(reqConfig)
.then((response)=>{
    return response
})
.catch((err)=>{
    return err;
})
}