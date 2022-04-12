// import Leftbar from "./components/leftbar/Leftbar";
// import Topbar from "./components/topbar/Topbar";
// import "./app.scss"
// import Home from "./pages/home/Home";

// function App() {
//   return (
//     <div className="App">
//       <Topbar />
//       <div className="container">
//         <Leftbar/>
//         <Home/>
//       </div>
//     </div>
//   );
// }
// export default App;





import "./app.scss"
import SinglePage from "./pages/single/SinglePage";
// import List from "./pages/list/List";


function App() {
  return (
    <div className="App">
      {/* <List /> */}
      <SinglePage/>

    </div>
  );
}
export default App;
