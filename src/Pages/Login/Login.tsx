import { SubmitHandler, useForm } from "react-hook-form"
import { LoginUser, test } from "../../Services/Auth/Auth.Service"

type Inputs = {
    email: string
    password: string
  }
  
function Login() {
    
  const {register,handleSubmit,formState: { errors },} = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log("Iniciando sesion...");
      LoginUser(data);
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