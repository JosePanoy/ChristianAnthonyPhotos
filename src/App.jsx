import Navbar from '../components/navbar.jsx';
import TopContent from '../components/top-content.jsx';
import MidContent from '../components/mid-content.jsx';
import MP4Feature from '../components/video-feature.jsx';
import BottomComponent from '../components/bottom-component.jsx';
import Footer from '../components/footer.jsx';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <TopContent />
      <MidContent />
      <MP4Feature />
      <BottomComponent />
      <Footer />
    </>
  );
}

export default App;
