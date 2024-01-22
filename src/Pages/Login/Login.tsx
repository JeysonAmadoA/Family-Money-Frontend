import { SubmitHandler, useForm } from "react-hook-form"
import { loginUser, test } from "../../Services/Auth/Auth.Service"
import { useDispatch } from "react-redux"
import { logIn, logOut } from "../../Redux/States/Login.State"
import { resetUser, setUser } from "../../Redux/States/User.State"
import { useNavigate } from "react-router-dom"
import { PrivateRoutes } from "../../Routes/Private.Routes"

type Inputs = {
    email: string
    password: string
  }
  
function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const {register,handleSubmit,formState: { errors },} = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await loginUser(data);
      dispatch(setUser({...result}));
      dispatch(logIn());
      navigate(`/${PrivateRoutes.HOME}`, {replace: true});
    } catch (error) {
      
      dispatch(logOut());
      dispatch(resetUser());
    }
  }

  const testClick = () => {
    console.log("Testing...");
    test();
  }
  
    
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}

        <input autoComplete="on" type="password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <button onClick={testClick}>PRUEBA</button>
    </div>
    
  )
}

export default Login