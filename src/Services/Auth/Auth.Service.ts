import axios from "axios";
import { LoginData } from "../../Models/Auth/LoginData.Model"
import API_ENDPOINTS from "../../Utilities/Endpoints";
import { getHeaderConfig, userAxios } from "../../Utilities";
import { User } from "../../Models/Users/User.Model";


const loginUser = async (loginData: LoginData) : Promise<User> => {
  try {
    const response = await axios.post(API_ENDPOINTS.LOGIN, loginData);
    const token = response.headers.authorization;    
    const tokenParts = token.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    const expirationDate = new Date(payload.exp * 1000);
    console.log(expirationDate);
    const cookieOptions = 'SameSite=None; Secure;';
    document.cookie = `jwtToken=${token}; expires=${expirationDate.toUTCString()}; ${cookieOptions}`;
    alert('Inicio de sesión exitoso');
    return response.data;
  } catch (exception) {
    const error : string = "Error al iniciar sesión:" + exception;
    alert(error);
    throw new Error(error);
  } 
};

const logOutUser = () => {
  return { isLogged: false }
}


const test = async () => {  
  try {
    const response = await userAxios("", getHeaderConfig());
    console.log(response.data);
  } catch (error) {
    alert('Error Users:' + error);
  }
};


export {loginUser, test, logOutUser};