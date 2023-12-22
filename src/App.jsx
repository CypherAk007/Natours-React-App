import Header from "./components/Header";
import classes from './App.module.scss'
import MainSection from "./components/MainSection";
import Feature from "./components/Feature";
import Tours from "./components/Tours";
const App = ()=>{
  return (
    <div className={`${classes.app} p-12`}>
        <Header></Header>
        <MainSection></MainSection>
        <Feature></Feature>
        <Tours></Tours>
    </div>
  )
}

export default App;