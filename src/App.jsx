import { register } from 'swiper/element/bundle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPage from './component/LandingPage';
import Test1 from './component/Test1';

function App() {
  register()

  return (
    <>
       <LandingPage></LandingPage>
       {/* <Test1></Test1> */}
    </>
  )
}

export default App
