import { commonAPI } from "./CommonAPI";
import { ServerURL } from "./ServerUrl";


export const registerAPI= async(reqbody)=>{
    return await commonAPI('post',`${ServerURL}/api/register`,reqbody,"")
}
export const loginAPI= async(reqbody)=>{
    return await commonAPI('post',`${ServerURL}/api/login`,reqbody,"")
}
export const addProjectAPI= async(reqbody,reqHeader)=>{
    return await commonAPI('post',`${ServerURL}/api/login`,reqbody,reqHeader)
}