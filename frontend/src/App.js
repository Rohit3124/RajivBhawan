//StyleSheets Import
import "./App.css";

//Components Import
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import RecentNews from "./Component/RecentNews/RecentNews";
import Welcome from "./Component/Welcome/Welcome";
import About from "./Component/About/About";
import Facilities from "./Component/Facilities/Facilities";
import OurGallery from "./Component/OurGallery/OurGallery";
import OurTeam from "./Component/OurTeam/OurTeam";
import NoticeBoard from "./Component/NoticeBoard/noticeBoard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <RecentNews />
      <About />
      <OurGallery />
      <Facilities />
      <OurTeam />
      <NoticeBoard />
      <Footer />
    </div>
  );
}

export default App;
