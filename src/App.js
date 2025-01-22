import './App.css';
import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import Category from './components/Category/Category.jsx';
// import NuevoVideo from './pages/NuevoVideo/NuevoVideo.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* <NuevoVideo /> */}
      <Category/>
    </div>
  );
}

export default App;
