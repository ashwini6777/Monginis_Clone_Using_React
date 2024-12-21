import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import MonginisNavbar from './MonginisNavbar';
import MonginisCarousel from './MonginisCarousel';
import HappinessSection from './HappinessSection';
import ShopByCake from './ShopByCake';
import Promotions from './Promotions';
import Speciality from './Speciality';


function App() {
  return (
    <div className="App">
      {/* <Header />
      <Body/>
      <Footer /> */}
      <MonginisNavbar />
      <MonginisCarousel />
      <HappinessSection />
      <ShopByCake />
      <Promotions />
      <Speciality /> 
    </div>
  );
}

export default App;
