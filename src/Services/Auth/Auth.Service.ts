import axios from "axios";
import { LoginData } from "../../Models/Auth/Login.Model"
import API_ENDPOINTS from "../../Utilities/Endpoints";
import { getHeaderConfig, userAxios } from "../../Utilities";


const LoginUser = async (loginData: LoginData) => {
  try {
    const response = await axios.post(API_ENDPOINTS.LOGIN, loginData);
    const token = response.headers.authorization;    
    const cookieOptions = 'SameSite=None; Secure;';
    document.cookie = `jwtToken=${token}; ${cookieOptions}`;    
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  } finally {
    console.log('Inicio de sesión exitoso');
    // configRequest();
  }
};



const test = async () => {  
  try {
    const response = await userAxios("", getHeaderConfig());
    console.log(response.data);
  } catch (error) {
    console.error('Error Testing:', error);
  }
};


export {LoginUser, test};