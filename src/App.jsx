import { register } from 'swiper/element/bundle';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

function App() {
  register()

  return (
    <>
       {/* <LandingPage></LandingPage> */}
       <HomePage></HomePage>
    </>
  )
}

export default App
