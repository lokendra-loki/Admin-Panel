import "./app.scss"
import UserList from "./pages/userList/UserList";
import Home from "./pages/home/Home";
import UpdateUser from "./pages/updateUser/UpdateUser";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/userList" element={<UserList />} />
          <Route exact path="/edit" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
