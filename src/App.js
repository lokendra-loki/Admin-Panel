import Leftbar from "./components/leftbar/Leftbar";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"

function App() {
  return (
    <div className="App">

      <Topbar />

      <div className="container">
        <Leftbar/>
       
       <div className="other">
         other pages
       </div>

      </div>
    
      
      


    </div>
  );
}
export default App;
