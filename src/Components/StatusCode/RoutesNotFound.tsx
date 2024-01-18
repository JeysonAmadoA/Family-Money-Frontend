import { Route, Routes } from "react-router-dom"

interface Props {
    children : JSX.Element[] | JSX.Element
}

function RoutesNotFound({children} : Props) {
   
  return (
        <Routes>
            {children}
            <Route path="*" element={<>NOT FOUND</>}></Route>
        </Routes>
  )
}
export default RoutesNotFound