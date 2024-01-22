import { Provider } from 'react-redux'
import './App.css'
import Login from './Pages/Login/Login'
import Store from './Redux/Store'
import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import RoutesNotFound from './Components/StatusCode/RoutesNotFound'
import { PrivateRoutes } from './Routes/Private.Routes'
import { PublicRoutes } from './Routes/Public.Routes'
import AuthGuard from './Guards/Auth.Guard'
import MoneyHome from './Pages/FamilyMoney/MoneyHome'
import Home from './Pages/Home/Home'
import UserRegister from './Pages/UserRegister/UserRegister'
import { GroupContextProvider } from './Pages/FamilyMoney/Context/FamilyGroups/Groups.Provider'

function App() {

  return (
    <>
      <Suspense fallback={<>Cargando....</>}>
          <Provider store={Store}>
          <GroupContextProvider>
              <BrowserRouter>
                  <RoutesNotFound>
                      <Route path='/' element={<Navigate to={PrivateRoutes.HOME}/>}/>
                      <Route path={PublicRoutes.HOME} element={<Home/>}></Route>
                      <Route path={PublicRoutes.LOGIN} element={<Login/>}/>
                      <Route path={PublicRoutes.USER_REGISTER} element={<UserRegister/>}/>
                      <Route element = {<AuthGuard/>}>
                          <Route path={`${PrivateRoutes.HOME}/*`} element={<MoneyHome/>}/>
                      </Route>                      
                  </RoutesNotFound>
              </BrowserRouter>
          </GroupContextProvider>
          </Provider>
      </Suspense>
    </>
  )
}

export default App
