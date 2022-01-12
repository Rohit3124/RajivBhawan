//StyleSheets Import
import "./App.css";

//Components Import
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import RecentNews from "./Component/RecentNews/RecentNews";
import Welcome from "./Component/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome/>
      <Footer />
      <RecentNews />
    </div>
  );
}

export default App;
