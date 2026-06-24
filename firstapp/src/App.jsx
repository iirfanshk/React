// functional component
import Home from "./Home";
import About from "./About";
import Homeclass from "./Classcomponents/Homeclass";
import Contactclass from "./Classcomponents/Contactclass";

function App() {
  return(
    <>
      <h1>Hello Everyone</h1>
      <h3>Welcome to the react</h3>
      <Home />
      <Homeclass />
      <About />
      <Contactclass />
    </>
  )
}
export default App;
