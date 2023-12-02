import Homepage from "./components/Homepage";
import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import Loginpass from "./components/Loginpass";
import Signpass from "./components/Signpass";
import { Signuppage } from "./components/Signuppage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/Home" element={<Homepage />}></Route>
        <Route path="/Signup" element={<Signuppage />}></Route>
        <Route path="/Login" element={<Loginpage />}></Route>
        <Route path="/signpass" element={<Signpass/>}></Route>
        <Route path="/loginpass" element={<Loginpass/>}></Route>
      </Routes>
    </>
  );
}

export default App;
