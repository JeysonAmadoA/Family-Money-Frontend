import { FieldError } from "react-hook-form"
import "./RequiredField.css"

interface Field {
    error? : FieldError
}

function RequiredField({error} : Field) {
  return (
    <>
    {error && <span className="errorMessage">Este campo es obligatorio</span>}
    </>
  )
}
export default RequiredField