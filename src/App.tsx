import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import Users from "./pages/Users.tsx";
import UserDetails from "./pages/UserDetails.tsx";

function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route element={<Layout/>}>
                      <Route path='/' element={<Home/>}/>
                      <Route path='/users' element={<Users/>}/>
                      <Route path='/user/:uid' element={<UserDetails/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
