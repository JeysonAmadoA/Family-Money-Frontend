import { SubmitHandler, useForm } from "react-hook-form"
import { loginUser, test } from "../../Services/Auth/Auth.Service"
import { useDispatch } from "react-redux"
import { logIn } from "../../Redux/States/Login.State"
import { setUser } from "../../Redux/States/User.State"

type Inputs = {
    email: string
    password: string
  }
  
function Login() {

  const dispatch = useDispatch();
    
  const {register,handleSubmit,formState: { errors },} = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
      console.log("Iniciando sesion...");
      const result = await loginUser(data);
      dispatch(setUser({...result}));
      dispatch(logIn());
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