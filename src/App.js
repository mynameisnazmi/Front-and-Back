import Login from "./component/Login";
import Register from "./component/Register";
import Dashbord from "./component/Dashbord";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* register list of link */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashbord" element={<Dashbord />} />
      </Routes>
    </>
  );
}

export default App;
