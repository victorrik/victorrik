import { urlStorageBase } from "./constants";

export const sleep = (timeAwait  = 0.5) =>
  new Promise<void>((resolve , reject) =>
    setTimeout(() => {
      resolve();
    }, timeAwait * 1000)
  );
export const apiFetch = async(request:RequestInfo | URL )=> {
	try{
		const response = await fetch(request)
		if (!response.ok) {
			throw new Error(`Http status ${response.status}`);
		}
		const data = await response.json()
		return {data, error:false}
	}catch(e){
		throw new Error(JSON.stringify(e)); 
	}
}
export const getStoragePath=(path:string,token?:string):string=>`${urlStorageBase}${encodeURIComponent(path)}?alt=media${token?"&token="+token:""}`