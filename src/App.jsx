import Header from "./components/Header";
import classes from './App.module.scss'
import MainSection from "./components/MainSection";
const App = ()=>{
  return (
    <div className={`${classes.app} p-12`}>
        <Header></Header>
        <MainSection></MainSection>
    </div>
  )
}

export default App;