import { openAxiosInstance,securedAxiosInstance } from "./instance";

const auth_apis = {
loginWithEmailAndPassword: (email, password) => {
    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);
    return openAxiosInstance.post(`token`,params)
  }
  };

const secured_apis = {
  getLatestStats:() => {
    return securedAxiosInstance.get(`/stats/latest`)
  }
};
  

  const apis = {
    ...auth_apis,
    ...secured_apis
  };
  
  export default apis;