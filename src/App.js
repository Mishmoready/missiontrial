import "./App.css";
import ProfileID from "./component/ProfileId.js";
import BottomSection from "./component/BottomSection.js";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import ProfilePhoto from "./component/ProfilePhoto.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProfileID></ProfileID>
      <ProfilePhoto></ProfilePhoto>
      <BottomSection></BottomSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
