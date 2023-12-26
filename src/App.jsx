import Header from "./components/Header";
import classes from './App.module.scss'
import MainSection from "./components/MainSection";
import Feature from "./components/Feature";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
const App = ()=>{
  return (
    <div className={`${classes.app} p-12 tab-port:p-0`}>
        <Navigation></Navigation>
        <Header></Header>
        <MainSection></MainSection>
        <Feature></Feature>
        <Tours></Tours>
        <Stories></Stories>
        <BookingSection></BookingSection>
        <Footer></Footer>
    </div>
  )
}

export default App;