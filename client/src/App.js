// function App() {
//   return <div>THIYA</div>;
// }

// export default App;
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageGenerator from './components/ImageGenerator';
import ImageGallery from './components/ImageGallery';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <ImageGenerator />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default App;

