
import About from "./components/about/About";
import Intro from "./components/Intro/Intro";
import Projectlist from "./components/ProjectsList/Projectlist";
import {Contact}  from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <Projectlist/>
      <Contact/>
    </div>
  );
} 

export default App;
