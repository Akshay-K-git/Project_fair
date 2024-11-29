import { commonAPI } from "./CommonAPI";
import { ServerURL } from "./ServerUrl";


export const register= async(reqbody)=>{
    return await commonAPI('post',`${ServerURL}/api/register`,reqbody,"")
}