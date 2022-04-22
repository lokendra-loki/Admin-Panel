import "./app.scss"
import UserList from "./pages/userList/UserList";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
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
          <Route exact path="/user/:userId" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
