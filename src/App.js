import Leftbar from "./components/leftbar/Leftbar";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">

      <Topbar />

      <div className="container">
        <Leftbar/>
        <Home/>
       
      </div>
    </div>
  );
}
export default App;
