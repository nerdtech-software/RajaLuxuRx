
import BookingInfo from '../components/BookingInfo'
import Footer from '../components/Footer'
import KeyPoint from '../components/KeyPoint'
import LimoServices from '../components/LimoServices'
import LuxuryLimo from '../components/LuxuryLimo'
import Nav from '../components/Nav'
import Registration from '../components/Registration'
import Video from '../components/Video'

const Home = () => {
  return (
    <>
    <Nav/>
    <Video/>
    <Registration/>
    <KeyPoint/>
    <LimoServices/>
    <LuxuryLimo/>
    <BookingInfo/>
     <Footer/>
    

    </>
  )
}

export default Home