import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/User";
import { FriendsContextProvider } from "./context/Friends";

import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Friends from "./pages/Friends";

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
      <FriendsContextProvider>
        <Routes>
          <Route path={"/profile"} element={<Profile />}/>
          <Route path={"/"} element={<Login />}/>
          <Route path={"/friends"} element={<Friends/>}/>
        </Routes>
      </FriendsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}
  
export default App;
