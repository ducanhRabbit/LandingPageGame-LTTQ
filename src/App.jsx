import { register } from 'swiper/element/bundle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPage from './component/LandingPage';

function App() {
  register()

  return (
    <>
       <LandingPage></LandingPage>
    </>
  )
}

export default App
