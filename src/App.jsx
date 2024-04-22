// import Test from "./component/test/Test"
import { register } from 'swiper/element/bundle';
import DownlBoard from "./component/DownlBoard"
import RegistrationRewards from "./component/RegistrationReward/RegistrationRewards"
import Selection from "./component/Selection"
import Banner from "./component/test/Banner"
import Test from "./component/test/Test"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScreenSize from './hook/useScreenSize';

function App() {
  register()

  return (
    <>
       <Banner></Banner>
       {/* <Selection></Selection> */}
        {/* <RegistrationRewards></RegistrationRewards> */}

    </>
  )
}

export default App
