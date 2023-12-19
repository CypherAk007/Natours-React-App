import Header from "./components/Header";
import classes from './App.module.scss'
const App = ()=>{
  return (
    <div className={`${classes.app} p-12`}>
        <Header></Header>
    </div>
  )
}

export default App;