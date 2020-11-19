import http from "./http-service";


const authEndPoint = "/login";
const contentendpoint = "/content";

export async function login(payload) 
{
    const data={ 
                    username:payload.username,
                    password :payload.password
               }

	const response = await http.post(authEndPoint, data);
    return response
  
}

export async function content(payload)
{
    const data={ url:payload.url,}
    const response = await http.post(contentendpoint, data);
    return response;
}

export default{login,content}