import axios from "axios"
const axiosInstance=axios.create(
    //local instance of firebase function
    // {baseURL:"http://127.0.0.1:5001/clone-2024-b1e86/us-central1/api"}
    // deployed version of amazone server on render.com
    {baseURL:"https://amazon-api-deploy-9sfj.onrender.com"}
);


export{axiosInstance}